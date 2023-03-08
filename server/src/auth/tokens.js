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
    // user session has completely expired
    return res.status(500).json("error while fetching user, please relogin.");
  } else {
    if (
      verifyJWT(req.cookies.accessToken).expired ||
      (!req.cookies.accessToken &&
        !verifyJWT(req.cookies.refreshToken).expired &&
        req.cookies.refreshToken)
    ) {
      //generate access and refresh token if access & refresh token is expired
      console.log(
        "Regenerating accessToken using refreshToken as accessToken has expired."
      );
      const { expired, payload } = verifyJWT(req.cookies.refreshToken);
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
