const {
  discordOAuthHandler,
  handleLogout,
  fetchUserDetails,
} = require("./controllers.js");
const {
  getDiscordUser,
  generateNewAccessToken,
  revokeAccessToken,
} = require("./services.js");
const jwt = require("jsonwebtoken");
const {
  refreshTokenCookieOptions,
  accessTokenCookieOptions,
  signJWT,
  verifyJWT,
  generateCookies,
} = require("./constants.js");

async function generateTokens(req, res) {
  if (req.cookies.refreshToken) {
    const { expired, payload } = verifyJWT(req.cookies.refreshToken);
    const { access_token, refresh_token } = await generateNewAccessToken(
      payload.refresh_token
    );
    const accessToken = signJWT({ access_token }, "15m");
    const refreshToken = signJWT({ refresh_token }, "59m");
    return { accessToken, refreshToken };
  }
}

async function verifyTokens(req, res, next) {
  if (!req.cookies || req.cookies === undefined) {
    console.log("litearlly HOW are you making a request...???");
    return null;
  }
  if (verifyJWT(req.cookies.refreshToken).expired) {
    console.log("need to relog you dumbdum");
    return null;
  } else {
    if (
      verifyJWT(req.cookies.accessToken).expired ||
      (!req.cookies.accessToken && !verifyJWT(req.cookies.refreshToken).expired)
    ) {
      const { accessToken, refreshToken } = await generateTokens(req, res);
      await generateCookies(res, req, accessToken, refreshToken);
      console.log("have to regenrate tokens because accessToken is expired");
      res.locals.at = accessToken;
      return next();
    }
    console.log("refresh token is active & access token");
    return next();
  }
}

function routes(app) {
  app.get("/api/auth/discord/redirect", discordOAuthHandler);
  app.get("/getUserDetails", verifyTokens, fetchUserDetails);
  app.get("/logout", verifyTokens, handleLogout);
}

module.exports = routes;
