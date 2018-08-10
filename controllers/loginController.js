const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Score
      .find(req.query)
      .sort({ score: "descending" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    console.log(req.body)
    db.Login
    .getAuthenticated(req.body.username, req.body.password, function(err, user, reason) {
      if (err) throw err
        // login was successful if we have a user
        if (user) {
            // handle login success
            console.log("login success");
            console.log(user);
            res.json(user);
            console.log("sending to browser, remeber to check brower console not backend console");
            return;
        }

        // otherwise we can determine why we failed
        var reasons = db.Login.failedLogin;
        switch (reason) {
            case reasons.NOT_FOUND:
            case reasons.PASSWORD_INCORRECT:
                // note: these cases are usually treated the same - don't tell
                // the user *why* the login failed, only that it did
                res.send("Incorrect Password")
                break;
            case reasons.MAX_ATTEMPTS:
                // send email or otherwise notify user that account is
                // temporarily locked
                res.send("Too many attempts")
                break;
        }
    })
   
  },
  //creates username and password
  create: function(req, res) {
    db.Login
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  //creates profile for score
  addScore: function(req, res) {
    console.log(req.body)
    db.Score
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
