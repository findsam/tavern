const {
  handleLogin,
  handleLogout,
  fetchUserDetails,
} = require("../controllers/authController.js");
const { verifyTokens } = require("../auth/tokens.js");

function authRoutes(app) {
  app.get("/api/auth/discord/redirect", handleLogin);
  app.get("/getUserDetails", verifyTokens, fetchUserDetails);
  app.get("/logout", verifyTokens, handleLogout);
}

module.exports = authRoutes;
