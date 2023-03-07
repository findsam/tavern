const { generateNewAccessToken } = require("./services.js");
const { signJWT, verifyJWT, generateCookies } = require("../constants.js");

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
    return res.status(500).json("error while fetching user, please relogin.");
  }
  if (verifyJWT(req.cookies.refreshToken).expired) {
    // user session has completely expired
    console.log("need to relog you dumbdum");
    return res.status(500).json("error while fetching user, please relogin.");
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
    return next();
  }
}

module.exports = { verifyTokens };
