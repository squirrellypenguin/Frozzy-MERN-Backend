// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const storeSchema = new Schema({
  		name: String,
		description: String,
		img: String,
		location: String,
		rating: [Number]
}, {
    timestamps: true
});

// Create our Model Object
const Store = model("Store", storeSchema);

// Export our Model Object
module.exports = Store;
