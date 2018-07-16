const express = require("express");
const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
