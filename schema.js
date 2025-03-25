const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String},
    price:{type:Number, required:true}
});

const model = mongoose.model('Dish', dishSchema);

module.exports = model;
