var Pet = require('../models/pet');
var User = require('../models/users');

exports.create = function(req, res) {

    User
        .findById(req.payload._id)
        .exec(function (err, user) {
            // If a user is found
            if (user) {
                user.pets.push({
                    name: req.body.name,
                    age: 0,
                    hunger: 10
                });
                var pet = user.pets[user.pets.length - 1];
                user.save(function(err) {
                    res.status(200);
                    res.json({
                        "name": pet.name,
                        "age": pet.age,
                        "hunger": pet.hunger
                    });
                });
            }
            else {
                res.status(401).json("User not found");
            }
    });
};

exports.feed = function(req, res) {
    User
        .findById(req.payload._id)
        .exec(function (err, user) {
            if(user) {
                user.pets.id(req.body._id).feed();
                user.save(function (err) {
                    res.status(200);
                    res.json({
                        "hunger": user.pets.id(req.body._id).hunger
                    });
                });
            }
    });
};

exports.list = function(req, res) {
    User
        .findById(req.payload._id)
        .exec(function (err, user) {
            if (user) {
                res.status(200);
                res.json({
                    pets: user.pets
                });
            }
    });
};

exports.delete = function(req, res) {
    User
        .findById(req.payload._id)
        .exec(function (err, user) {
            if (user) {
                user.pets.pull(user.pets.id(req.body._id));
                user.save(function (err) {
                    res.status(200);
                    res.json({
                        pets: user.pets
                    });
                });
            }
    });
};