var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var dbconfig = require('../config/database');
var passport = require('passport');

var auth = jwt({
    secret: dbconfig.secret,
    userProperty: 'payload'
});

var ctrlPet = require('../controllers/pet');

router.post('/', auth, ctrlPet.create);
router.put('/', auth, ctrlPet.feed);
router.get('/', auth, ctrlPet.list);
router.delete('/', auth, ctrlPet.delete);

module.exports = router;