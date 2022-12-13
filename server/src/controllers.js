const { getDiscordTokens, getGoogleUser } = require("./services");
const jwt = require("jsonwebtoken");

const accessTokenCookieOptions = {
  maxAge: 900000, // 15 mins
  httpOnly: true,
  domain: "localhost",
  path: "/",
  sameSite: "strict",
  secure: false,
};
const refreshTokenCookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 1.8e6,
};

async function discordOAuthHandler(req, res) {
  const { code } = req.query;
  const { access_token, refresh_token } = await getDiscordTokens(code);
  const accessToken = jwt.sign({ access_token }, process.env.PRIV_KEY, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ refresh_token }, process.env.PRIV_KEY, {
    expiresIn: "59m",
  });
  res.cookie("accessToken", accessToken, accessTokenCookieOptions);
  res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
  res.redirect("http://localhost:3000");
}

module.exports = { discordOAuthHandler };

// const { given_name, email, picture } = await getGoogleUser(id_token, access_token);
// const user = { given_name, email, picture, access_token };
// const accessToken = jwt.sign(user, process.env.PRIV_KEY);
// const refreshToken = jwt.sign({ refresh_token: id_token }, process.env.PRIV_KEY);
// res.cookie("accessToken", accessToken, accessTokenCookieOptions);
// res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
