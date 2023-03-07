require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes.js");
const contentRoutes = require("./routes/contentRoutes.js");
const { corsDefaults } = require("./constants.js");

const app = express();

app.use(cors(corsDefaults));
app.use(express.json());
app.use(cookieParser());

app.listen(3001, async () => {
  console.log(`App is running at http://localhost:${3001}`);
  authRoutes(app);
  contentRoutes(app);
});
