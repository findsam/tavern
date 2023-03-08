const {
  fetchInitialAuthTokens,
  revokeAccessToken,
  getDiscordUser,
} = require("../auth/services");
const { verifyJWT } = require("../constants.js");
const { generateCookies, clearCookies } = require("../auth/tokens.js");

async function handleLogin(req, res) {
  if (req.query.error) return res.redirect("http://localhost:3000/landing");
  console.log("creating cookies and successfully gained access");
  const { accessToken, refreshToken } = await fetchInitialAuthTokens(req.query.code);
  await generateCookies(res, req, accessToken, refreshToken);
  res.redirect("http://localhost:3000/feed");
}

async function handleLogout(req, res) {
  if (
    await revokeAccessToken(
      verifyJWT(res.locals.at || req.cookies.accessToken).payload.access_token
    )
  ) {
    console.log("deleting cookies and successfully revoked access");
    await clearCookies(res);
    res.status(200).json("deleted");
  } else {
    console.log("couldnt delete cookies wtf :(");
    res.status(400).json("couldn't revoked");
  }
}

async function fetchUserDetails(req, res) {
  try {
    res
      .status(200)
      .json(
        await getDiscordUser(
          verifyJWT(res.locals.at || req.cookies.accessToken).payload.access_token
        )
      );
  } catch (err) {
    res.status(404).json("error while fetching user, please relogin.");
  }
}

module.exports = {
  handleLogin,
  handleLogout,
  fetchUserDetails,
};
