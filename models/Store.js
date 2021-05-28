// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const storeSchema = new Schema({
  		name: {type: String, require: true},
		  description: String,
		img: String,
		location: {type: String, require: true},
		rating: [Number],
		order: [Schema.Types.ObjectId],
		stock: {
			inventory: {type: Number},
			creem: {type: Schema.Types.ObjectId, ref: 'Creem', require: true}
		}
}, {
    timestamps: true
});

// Create our Model Object
const Store = model("Store", storeSchema);

// Export our Model Object
module.exports = Store;
