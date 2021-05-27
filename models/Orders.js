// Import Mongoose
const mongoose = require("mongoose");
const User = require("../models/Users")
const Creem = require("../models/Creem")
// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const orderSchema = new Schema({
  		name: String,
    	  user: [{type: Schema.Types.ObjectId, ref: 'User'}],
		  creems: [{type: Schema.Types.ObjectId, ref: 'Creems'}],
	
}, {
    timestamps: true
});

// Create our Model Object
const Order = model("Order", orderSchema);

// Export our Model Object
module.exports = Order;
