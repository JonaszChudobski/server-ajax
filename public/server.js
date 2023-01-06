const methods = require("../src/methods");
const express = require("express");
const app = express();

app.use(express.static("../src"));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.use(express.json());
app.post("/", methods.postData);

app.put("/data/:user", methods.putData);

app.delete("/data/:user", methods.deleteData);

const server = app.listen(3000, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log(`Server is listening at ${host}:${port}`);
});
