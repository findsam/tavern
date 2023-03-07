const {
  handleLogin,
  handleLogout,
  fetchUserDetails,
  fetchMultipleThreads,
  fetchIndividualThread,
} = require("./controllers.js");
const { verifyTokens } = require("./auth/tokens.js");

function routes(app) {
  app.get("/api/auth/discord/redirect", handleLogin);
  app.get("/getUserDetails", verifyTokens, fetchUserDetails);
  app.get("/logout", verifyTokens, handleLogout);
  app.get("/fetch/:type", fetchMultipleThreads);
  app.get("/fetchIndividualThread/:id", fetchIndividualThread);
}

module.exports = routes;
