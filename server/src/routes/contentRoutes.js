const {
  fetchMultipleThreads,
  fetchIndividualThread,
} = require("../controllers/controllers.js");

function contentRoutes(app) {
  app.get("/fetch/:type", fetchMultipleThreads);
  app.get("/fetchIndividualThread/:id", fetchIndividualThread);
}

module.exports = contentRoutes;
