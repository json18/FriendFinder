var friendsData = require("../data/friends");


app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
app.post("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
      res.json(tableData);
    });
  
    app.get("/api/waitlist", function(req, res) {
      res.json(waitListData);
    });
  

    