var Pet = require('../models/pet');
var User = require('../models/users');

exports.create = async function(userId, pet) {
    try {
        let user = await User.findById(userId);
        if(user) {
            user.pets.push(pet);
            user = await user.save;

            return user.pet[user.pet.length - 1];
        }

        return null;
    }
    catch(e) {
        throw Error("Error creating pet");
    }
};

exports.feed = async function(userId, petId) {
    try {
        let user = await User.findById(userId);
        if(user) {
            let pet = user.pets.id(petId)
            pet.feed();
            user = await user.save;

            return pet;
        }

        return null;
    }
    catch(e) {
        throw Error("Error feeding pet");
    }
};

exports.list = async function(userId) {
    try {
        let user = await User.findById(userId);
        if(user) {
            return user.pets;
        }

        return null;
    }
    catch(e) {
        throw Error("Error listing pets");
    }
};

exports.delete = async function(userId, petId) {
    try {
        let user = await User.findById(userId);
        if(user) {
            user.pets.pull(user.pets.id(petId));
            user = await user.save();

            return user.pets;
        }
        
        return null;
    }
    catch(e) {
        throw Error("Error deleting pet");
    }
};