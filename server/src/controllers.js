const { getDiscordTokens, getGoogleUser,  revokeAccessToken, getDiscordUser } = require("./services");
const jwt = require("jsonwebtoken");
const { refreshTokenCookieOptions, signJWT, generateCookies, verifyJWT} = require("./constants.js");

async function discordOAuthHandler(req, res) {
  if (req.query.error)
    return res.redirect("http://localhost:3000/?login=failure");
  const { code } = req.query;
  const { access_token, refresh_token } = await getDiscordTokens(code);
  const refreshToken = signJWT({refresh_token}, '59m')
  const accessToken = signJWT({access_token}, '15m')
  await generateCookies(res, req, accessToken, refreshToken);
  res.redirect("http://localhost:3000?login=success");
}

async function handleLogout(req,res){
  if (
      await revokeAccessToken(
        verifyJWT(res.locals.at || req.cookies.accessToken).payload.access_token
      )
    ){
      console.log("deleting cookies and successfully revoked access");
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");
      res.status(200).json("deleted");
    } else {
      console.log("couldnt delete cookies wtf :(");
      res.status(400).json("couldn't revoked");
    }
}

async function fetchUserDetails(req,res){
      res
      .status(200)
      .json(
        await getDiscordUser(
          verifyJWT(res.locals.at || req.cookies.accessToken).payload
            .access_token
        )
      );
}
module.exports = { discordOAuthHandler, handleLogout, fetchUserDetails};
