// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const creemSchema = new Schema({
  	name: String,
	description: String,
	img: String,
	cost: Number,
	story: String,
	rating: [Number]
}, {
    timestamps: true
});

// Create our Model Object
const Creem = model("Creem", creemSchema);

// Export our Model Object
module.exports = Creem;
