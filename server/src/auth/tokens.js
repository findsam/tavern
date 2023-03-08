const { generateAccessToken } = require("./services.js");
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

async function generateTokens(req, res) {
  if (req.cookies.refreshToken) {
    const { expired, payload } = verifyJWT(req.cookies.refreshToken);
    const { accessToken, refreshToken } = await generateAccessToken(
      payload.refresh_token
    );
    return { accessToken, refreshToken };
  }
}

async function verifyTokens(req, res, next) {
  if (!req.cookies || req.cookies === undefined) {
    // error handler for wtf...
    console.log("litearlly HOW are you making a request...???");
    return res.status(500).json("error while fetching user, please relogin.");
  }
  if (verifyJWT(req.cookies.refreshToken).expired) {
    // user session has completely expired

    return res.status(500).json("error while fetching user, please relogin.");
  } else {
    if (
      verifyJWT(req.cookies.accessToken).expired ||
      (!req.cookies.accessToken && !verifyJWT(req.cookies.refreshToken).expired)
    ) {
      //generate access and refresh token if access & refresh token is expired
      const { accessToken, refreshToken } = await generateTokens(req, res);
      await generateCookies(res, req, accessToken, refreshToken);
      console.log(
        "Regenerating accessToken using refreshToken as accessToken has expired."
      );
      res.locals.at = accessToken;
      return next();
    }
    return next();
  }
}

module.exports = { verifyTokens, generateCookies, clearCookies };
