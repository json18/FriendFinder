var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);    
  });

  app.post("/api/friends", function(req, res) {
    console.log('tiss is req', req)
    console.log('hey i am here');
    console.log("this is req.body", req.body);
    friendsData.push(req.body);
    res.json(true);
    

  });
};


