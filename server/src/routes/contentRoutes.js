const {
  fetchMultipleThreads,
  fetchIndividualThread,
  fetchThreadsByName,
} = require("../controllers/contentController.js");

module.exports = (app) => {
  app.get("/fetch/:type", fetchMultipleThreads);
  app.get("/fetchIndividualThread/:id", fetchIndividualThread);
  app.get("/fetchThreadsByName/:search", fetchThreadsByName);
};

// module.exports = contentRoutes;
