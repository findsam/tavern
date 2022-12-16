const { getDiscordTokens, getGoogleUser } = require("./services");
const jwt = require("jsonwebtoken");
const { refreshTokenCookieOptions, signJWT, generateCookies } = require("./constants.js");

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

module.exports = { discordOAuthHandler };
