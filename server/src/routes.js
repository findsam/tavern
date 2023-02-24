const {
  discordOAuthHandler,
  handleLogout,
  fetchUserDetails,
  fetchIndividualThread,
} = require("./controllers.js");
const { generateNewAccessToken } = require("./services.js");
const jwt = require("jsonwebtoken");
const { signJWT, verifyJWT, generateCookies, dummyData } = require("./constants.js");

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

async function fetchTest(req, res) {
  const { type } = req.params;
  if (+type === 0) {
    res.status(200).json(dummyData);
  }
  if (+type === 1) {
    res
      .status(200)
      .json([
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
      ]);
  }
}

function routes(app) {
  app.get("/api/auth/discord/redirect", discordOAuthHandler);
  app.get("/getUserDetails", verifyTokens, fetchUserDetails);
  app.get("/logout", verifyTokens, handleLogout);
  app.get("/fetch/:type", fetchTest);
  app.get("/fetchIndividualThread/:id", fetchIndividualThread);
}

module.exports = routes;
