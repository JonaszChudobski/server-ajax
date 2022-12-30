const express = require("express");
const app = express();
let data = [];
let idCounter = 1;

app.use(express.static("../src"));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.use(express.json());
app.post("/", (req, res) => {
  data.push({ userId: idCounter, user: req.body });
  idCounter += 1;
  res.status(201).send(data);
});

app.put("/data/:user", (req, res) => {
  const user = req.params.user;
  const account = data[user - 1];
  if (!account) {
    return res.status(404).json({ error: "User does not exist" });
  }
  account["user"] = req.body;
  res.send(JSON.stringify(data[user - 1]));
});

app.delete("/data/:user", (req, res) => {
  const user = req.params.user;
  const account = data[user - 1];
  if (!account) {
    return res.status(404).json({ error: "User does not exist" });
  }
  data = data.slice(1, user - 1);
  res.send(JSON.stringify(data));
});

const server = app.listen(3000, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log(`Server is listening at ${host}:${port}`);
});
