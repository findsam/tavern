const { getDiscordTokens, getGoogleUser } = require("./services");
const jwt = require("jsonwebtoken");
const { refreshTokenCookieOptions } = require("./constants.js");

async function discordOAuthHandler(req, res) {
  if (req.query.error) return res.redirect("http://localhost:3000/?login=failure");
  const { code } = req.query;
  const { refresh_token } = await getDiscordTokens(code);
  const refreshToken = jwt.sign({ refresh_token }, process.env.PRIV_KEY, {
    expiresIn: "59m",
  });
  res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
  res.redirect("http://localhost:3000?login=success");
}

module.exports = { discordOAuthHandler };
