var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: 'dog' | 'cat',
        required
    },
    age: {
        type: Number
    },
    hunger: {
        type: Number
    }
});

PetSchema.methods.feed = function() {
    this.hunger = this.hunger >= 10 ? 10 : this.hunger + 1;
}

exports = module.exports = PetSchema;