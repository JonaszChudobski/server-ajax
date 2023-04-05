const methods = require("../src/methods");
const express = require("express");
const data = require("../src/data");
const app = express();

app.use(express.static("../src"));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.use(express.json());
app.post("/", (req, res) => {
  let userId = methods.createUuid();
  data.dataStorage.set(userId, req.body);
  res.status(201).send(Object.fromEntries(data.dataStorage));
});

app.put("/data/:user", (req, res) => {
  const user = req.params.user;
  const body = req.body;
  methods.findElement(data.dataStorage, user);
  if (account === undefined) {
    return res.status(404).json({ error: "User does not exist" });
  }
  methods.putData(data.dataStorage, user, body);
  res.status(201).send(Object.fromEntries(data.dataStorage));
});

app.delete("/data/:user", (req, res) => {
  const user = req.params.user;
  methods.findElement(data.dataStorage, user);
  if (account === undefined) {
    return res.status(404).json({ error: "User does not exist" });
  }
  methods.deleteData(data.dataStorage, user);
  res.status(201).send(Object.fromEntries(data.dataStorage));
});

const server = app.listen(3000, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log(`Server is listening at ${host}:${port}`);
});
