var AuthService = require('../services/authentication');

exports.register = async function(req, res) {
    var user = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    }

    try {
        let createdUser = await AuthService.register(user);
        return res.status(201).json({status: 201, data: {token: createdUser.generateJwt()}, message: "User successfully created"});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: "User not created"});
    }
};

exports.login = async function(req, res) {
    try {
        let user = await AuthService.login(req.user.username);
        return res.status(200).json({status: 200, data: {token: user.generateJwt()}, message: "Login successfull"});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: "Error trying to login"});
    }
};

exports.profileRead = async function(req, res) {
    try {
        let user = await AuthService.profileRead(req.payload._id);
        return res.status(200).json({status: 200, data: user, message: "Profile successfully returned"});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: "Error trying to profile"});
    }
};