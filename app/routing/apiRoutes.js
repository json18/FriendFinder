var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  
  app.post("/api/friends", function(req, res) {
    console.log("I'm in the API route");
    friendsData.push(req.body);
    res.json(true);
  });

};


