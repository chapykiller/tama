var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var dbconfig = require('../config/database');
var passport = require('passport');

var auth = jwt({
    secret: dbconfig.secret,
    userProperty: 'payload'
});

var ctrlAuth = require('../controllers/authentication');

router.get('/profile', auth, ctrlAuth.profileRead);
router.post('/register', ctrlAuth.register);
router.post('/login', passport.authenticate('local', {session: false}), ctrlAuth.login);

module.exports = router;