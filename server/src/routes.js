const { discordOAuthHandler } = require("./controllers.js");
const { getDiscordUser, generateNewAccessToken } = require("./services.js");
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

function verifyJWT(token) {
  try {
    return { payload: jwt.verify(token, process.env.PRIV_KEY), expired: false };
  } catch (error) {
    return { payload: null, expired: true };
  }
}

async function verifyTokens(req, res, next) {
  const decodedRefreshToken = verifyJWT(req.cookies.refreshToken);
  const decodedAccessToken = verifyJWT(req.cookies.accessToken);

  if (decodedAccessToken.expired) {
    const { access_token, refresh_token } = await generateNewAccessToken(
      decodedRefreshToken.payload.refresh_token
    );

    const accessToken = jwt.sign({ access_token }, process.env.PRIV_KEY, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ refresh_token }, process.env.PRIV_KEY, {
      expiresIn: "59m",
    });

    res.cookie("accessToken", accessToken, accessTokenCookieOptions);
    res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
    res.send();
    return next();
  }
}

function routes(app) {
  app.get("/api/auth/discord/redirect", discordOAuthHandler);

  app.get("/getUser", async (req, res) => {
    const decodedAccessToken = jwt.verify(
      req.cookies.accessToken,
      process.env.PRIV_KEY
    ).access_token;

    console.log(decodedAccessToken);
    res.status(200).json({ data: await getDiscordUser(decodedAccessToken) });
  });

  app.get("/", verifyTokens, async (req, res) => {});
}

module.exports = routes;
