var mongoose = require('mongoose');
var dbconfig = require('./config/database');

exports.connect = async function() {
    try {
        return (await mongoose.connect(dbconfig.database));
    }
    catch(e) {
        console.log("Failed to connect to mongodb: " + e);
    }
}