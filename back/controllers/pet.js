var PetService = require('../services/pet');

exports.create = async function(req, res) {
    var pet = {
        name: req.body.name,
        type: req.body.type,
        age: 0,
        hunger: 0
    }

    try {
        let createdPet = await PetService.create(req.payload._id, pet);
        return res.status(201).json({ status: 201, data: createdPet, message: "Pet successfully created" });
    }
    catch(e) {
        return res.status(400).json({ status:400, message: "Pet not created"  });
    }
};

exports.feed = async function(req, res) {
    try {
        let pet = await PetService.feed(req.payload._id, req.body.id);
        return res.status(200).json({ status: 200, data: pet, message: "Pet successfully fed" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: "Error feeding pet" });
    }
};

exports.list = async function(req, res) {
    try {
        let pets = await PetService.list(req.payload._id);
        return res.status(200).json({ status: 200, data: pets, message: "Pets listed" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: "Error listing pets" });
    }
};

exports.delete = async function(req, res) {
    try {
        let pets = await PetService.delete(req.payload._id, req.params.id);
        return res.status(200).json({ status: 200, data: pets, message: "Pet deleted" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: "Error deleting pet" });
    }
};