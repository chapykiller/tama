var passport = require('passport');
var User = require('../models/users');

exports.register = function(req, res) {
    var user = new User();

    user.name = req.body.name;
    user.username = req.body.username;

    user.setPassword(req.body.password);

    user.save(function(err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
};

exports.login = function (req, res) {
    var token;
    User.findOne({ username: req.body.username }, function (err, user) {
        // If a user is found
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        }
        else {
            res.status(401).json("User not found");
        }
    });
};