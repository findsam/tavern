const { discordOAuthHandler } = require("./controllers.js");
const { getDiscordUser } = require("./services.js");
const jwt = require("jsonwebtoken");

function routes(app) {
  app.get("/api/auth/discord/redirect", discordOAuthHandler);
  app.get("/", async (req, res) => {
    console.log(req.cookies);
    const refresh_token = jwt.verify(req.cookies.refreshToken, process.env.PRIV_KEY);
    const access_token = jwt.verify(req.cookies.accessToken, process.env.PRIV_KEY);
    const x = await getDiscordUser(access_token);
    console.log(x);
  });
}

module.exports = routes;
