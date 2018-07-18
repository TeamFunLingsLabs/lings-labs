const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

function applicationTemplate() {
  const applications = {};
  let applyId = 0;

  function newApplications(application) {
    applyId++;
    applications[applyId] = Object.assign({}, application, { id: applyId });
    return applications[applyId];
  }

  return newApplications;
}

const newApplication = applicationTemplate();

app.post("/api/applications", function(req, res) {
  console.log("reqBody", req.body);
  const application = newApplication(req.body);

  res.json(application);
});

app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
