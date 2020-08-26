const express = require("express");

const theLog = console.log;
const app = express();
const path = require("path");

const PORT = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "MY-PORTFOLIO-WEBSITE", index.html));
});

app.listen(PORT);

app.listen(PORT, () => {
  theLog("The server is starting on PORT,", 8080);
});
