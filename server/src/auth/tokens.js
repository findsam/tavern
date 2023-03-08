const { generateAccessTokenFromRefresh } = require("./services.js");
const {
  verifyJWT,
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} = require("../constants.js");

async function generateCookies(res, req, accessToken, refreshToken) {
  res.cookie("accessToken", accessToken, accessTokenCookieOptions);
  res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
}

async function clearCookies(res) {
  res.clearCookie("refreshToken");
  res.clearCookie("accessToken");
}

async function verifyTokens(req, res, next) {
  if (!req.cookies || req.cookies === undefined) {
    // error handler for wtf how did you even make the request you hackermans...
    console.log("litearlly HOW are you making a request...???");
    return res.status(500).json("error while fetching user, please relogin.");
  }
  if (verifyJWT(req.cookies.refreshToken).expired) {
    console.log("refresh token is expired, please login again.");
    return res.status(500).json("user refresh token expired, please login again.");
  } else {
    if (
      verifyJWT(req.cookies.accessToken).expired ||
      (!req.cookies.accessToken &&
        !verifyJWT(req.cookies.refreshToken).expired &&
        req.cookies.refreshToken)
    ) {
      console.log(
        "Regenerating accessToken using refreshToken as accessToken has expired."
      );
      const { payload } = verifyJWT(req.cookies.refreshToken);
      const { accessToken, refreshToken } = await generateAccessTokenFromRefresh(
        payload.refresh_token
      );
      res.locals.at = accessToken;
      await generateCookies(res, req, accessToken, refreshToken);
      return next();
    }
    return next();
  }
}

module.exports = { verifyTokens, generateCookies, clearCookies };
