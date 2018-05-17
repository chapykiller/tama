var passport = require('passport');
var User = require('../models/users');

exports.register = async function(user) {
    var newUser = new User({
        name: user.name,
        username: user.username
    });

    newUser.setPassword(user.password);

    try {
        let savedUser = await newUser.save();
        return savedUser;
    }
    catch(e) {
        throw Error("Error creating user");
    }
};

exports.login = async function(username) {
    try {
        let foundUser = await User.findOne({username: username});
        return foundUser;
    }
    catch(e) {
        throw Error("Error during login");
    }
};

exports.profileRead = async function (userId){
    try {
        let user = await User.findById(userId);
        return user;
    }
    catch(e) {
        throw Error("Error accessing profile");
    }
};