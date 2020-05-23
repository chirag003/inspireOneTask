const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var port = "8080";

app.listen(port, () => {
  console.log("\n\nServer started on port " + port);
});

app.post("/authenticate", (req, res) => {
  console.log(req);
  res.send("Api is working");
});
