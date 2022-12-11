const express = require("express");
const app = express();
const data = [];

app.use(express.static("../src"));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});
app.use(express.json());
app.post("/", (req, res) => {
  data.push(req.body);
  res.status(201).send(data);
});

const server = app.listen(3000, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log(`Server is listening at ${host}:${port}`);
});
