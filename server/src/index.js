require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { corsDefaults } = require("./constants.js");

const app = express();

app.use(cors(corsDefaults));
app.use(express.json());
app.use(cookieParser());

app.listen(3001, async () => {
  console.log(`App is running at http://localhost:${3001}`);
  for (file of fs.readdirSync(process.cwd() + "/src/routes")) {
    require(process.cwd() + `/src/routes/${file}`)(app);
  }
  console.log("loaded files");
});
