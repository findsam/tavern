const {
  fetchMultipleThreads,
  fetchIndividualThread,
} = require("../controllers/contentController.js");

function contentRoutes(app) {
  app.get("/fetch/:type", fetchMultipleThreads);
  app.get("/fetchIndividualThread/:id", fetchIndividualThread);
}

module.exports = contentRoutes;
