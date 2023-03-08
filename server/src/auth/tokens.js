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
  const refresh = verifyJWT(req.cookies.refreshToken);
  const access = verifyJWT(req.cookies.accessToken);

  if (!req.cookies || req.cookies === undefined)
    return res.status(500).json("error while fetching user, please relogin.");
  if (refresh.expired) {
    await clearCookies(res);
    return res.status(500).json("user refresh token expired, please login again.");
  } else {
    if (
      access.expired ||
      (!refresh.expired &&
        access.payload.access_token == null &&
        refresh.payload.refresh_token !== null)
    ) {
      console.log(
        "Regenerating accessToken using refreshToken as accessToken has expired."
      );
      const { accessToken, refreshToken } = await generateAccessTokenFromRefresh(
        refresh.payload.refresh_token
      );
      res.locals.at = accessToken;
      await generateCookies(res, req, accessToken, refreshToken);
      return next();
    }
    console.log("tokens valid");
    return next();
  }
}

module.exports = { verifyTokens, generateCookies, clearCookies };
