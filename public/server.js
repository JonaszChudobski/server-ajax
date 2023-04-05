const methods = require("../src/methods");
const express = require("express");
const app = express();

let data = new Map();

app.use(express.static("../src"));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.use(express.json());
app.post("/", (req, res) => {
  let userId = methods.createUuid();
  data.set(userId, req.body);
  res.status(201).send(Object.fromEntries(data));
});

app.put("/data/:user", (req, res) => {
  const user = req.params.user;
  const body = req.body;
  methods.findElement(data, user);
  if (account === undefined) {
    return res.status(404).json({ error: "User does not exist" });
  }
  methods.putData(data, user, body);
  res.status(201).send(Object.fromEntries(data));
});

app.delete("/data/:user", (req, res) => {
  const user = req.params.user;
  methods.findElement(data, user);
  if (account === undefined) {
    return res.status(404).json({ error: "User does not exist" });
  }
  methods.deleteData(data, user);
  res.status(201).send(Object.fromEntries(data));
});

const server = app.listen(3000, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log(`Server is listening at ${host}:${port}`);
});
