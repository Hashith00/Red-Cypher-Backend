const express = require("express");
const app = express();
const apiPage = require("./api.js");
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:5173",
  credentials: false,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));

let port = 3000;
app.listen(port, () => console.log("The server is running at PORT " + port));
app.use("/api", apiPage);
