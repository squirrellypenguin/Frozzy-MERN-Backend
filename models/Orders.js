// Import Mongoose
const mongoose = require("mongoose");
const User = require("../models/Users")
const Creem = require("../models/Creem")
// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;


// Create Place Schema
const orderSchema = new Schema({
  		name: { type: String, required: true, index: { unique: true }},
    	  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
		  creems: [{type: Schema.Types.ObjectId, ref: 'Creems', required: true}]
	
}, {
    timestamps: true
});

// Create our Model Object
const Orders = model("Order", orderSchema);

// Export our Model Object
module.exports = Orders;
