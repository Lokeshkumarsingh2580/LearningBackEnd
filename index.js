const express = require("express");
const app = express();
port = 3000;

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/about", (req, res) => {
  res.send("<h1>lokesh About</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
