// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const userSchema = new Schema({
  		first: String,
		  last: String,
		  email: String,
		  phone: Number,
		  address: String,
		  city: String,
		  state: String,
		  zip: Number,
		  faves: [String], 

		  img: String
		
}, {
    timestamps: true
});

// Create our Model Object
const User = model("User", userSchema);

// Export our Model Object
module.exports = User;

/* Sample IDS

60a7b906fbd7f5df8c75d011

60a7b906fbd7f5df8c75d013

60a92bea49a38fbe5d2d39c2

*/