const { fetchMultipleThreads, fetchIndividualThread } = require("../controllers/contentController.js");

module.exports = (app) => {
  app.get("/fetch/:type", fetchMultipleThreads);
  app.get("/fetchIndividualThread/:id", fetchIndividualThread);
  app.get("/fetchThreadsBySearch/:title", fetchIndividualThread);
};

// module.exports = contentRoutes;
