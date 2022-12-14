const { discordOAuthHandler } = require("./controllers.js");
const { getDiscordUser, generateNewAccessToken } = require("./services.js");
const jwt = require("jsonwebtoken");
const {
  refreshTokenCookieOptions,
  accessTokenCookieOptions,
} = require("./constants.js");

function verifyJWT(token) {
  try {
    return { payload: jwt.verify(token, process.env.PRIV_KEY), expired: false };
  } catch (error) {
    return { payload: null, expired: true };
  }
}

async function generateTokens(req, res) {
  if (req.cookies.refreshToken) {
    const { expired, payload } = verifyJWT(req.cookies.refreshToken);
    const { access_token, refresh_token } = await generateNewAccessToken(
      payload.refresh_token
    );
    const accessToken = jwt.sign({ access_token }, process.env.PRIV_KEY, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ refresh_token }, process.env.PRIV_KEY, {
      expiresIn: "59m",
    });
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
    if (verifyJWT(req.cookies.accessToken).expired || !req.cookies.accessToken) {
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

async function generateCookies(res, req, accessToken, refreshToken) {
  res.cookie("accessToken", accessToken, accessTokenCookieOptions);
  res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
}

function routes(app) {
  app.get("/api/auth/discord/redirect", discordOAuthHandler);
  app.get("/getUserDetails", verifyTokens, async (req, res) => {
    res.status(200).json({
      data: await getDiscordUser(
        verifyJWT(res.locals.at || req.cookies.accessToken).payload.access_token
      ),
    });
  });
}

module.exports = routes;
