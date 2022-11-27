const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
app.post("/posted", urlEncodedParser, function (req, res) {
  responseJSON = {
    name: req.body.name,
    surname: req.body.surname,
  };
  res.send(responseJSON);
});

const server = app.listen(3000, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log(`Server is listening at ${host}:${port}`);
});
