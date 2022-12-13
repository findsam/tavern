const corsDefaults = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
require("dotenv").config();

const app = express();

app.use(cors(corsDefaults));
app.use(express.json());
app.use(cookieParser());

app.listen(3001, async () => {
  console.log(`App is running at http://localhost:${3001}`);
  routes(app);
});
