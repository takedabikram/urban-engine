const express = require("express");
const app = express();
const path = require("path");
const { sumTwoValue } = require('./utils')

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/sum", (_, res) => {
  const summedValue = sumTwoValue(3, 4);
  res.send({ value: summedValue });
});



app.listen(3000, () => {
  console.info("server started");
});
