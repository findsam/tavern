const { discordOAuthHandler } = require("./controllers.js");
const { getDiscordUser } = require("./services.js");
const jwt = require("jsonwebtoken");

function routes(app) {
  app.get("/api/auth/discord/redirect", discordOAuthHandler);
  app.get("/", async (req, res) => {
    const refresh_token = jwt.verify(req.cookies.refreshToken, process.env.PRIV_KEY);
    const access_token = jwt.verify(req.cookies.accessToken, process.env.PRIV_KEY);
    res.status(200).json({
      data: await getDiscordUser(access_token),
    });
  });
}

module.exports = routes;
