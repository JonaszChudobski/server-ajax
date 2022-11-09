const express = require("express");
const app = express();

app.use("/public", express.static("public"));

app.get("/public", (req, res) => {
  res.send("200");
});
app.get("/public/text.json", (req, res) => {
  res.send("200");
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));