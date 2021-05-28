// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();
const mongoose = require('mongoose')
const { Router } = require("express");
//IMPORT OUR MODEL
const User = require("../models/Users");
// const Creem = require("../models/Creem");
// const seedStore = require("../db/seedStoreData.json")
// SEED DATA FOR SEED ROUTE
const userSeed = [
  {
  "user": "User1",
  "first": "John",
  "last": "Doe"
  
   },
   {
  	"user": "User2",
    "first": "Jane",
    "last": "Eod"
    
     },  {
    	"user": "User 3",
        "first": "Pat",
        "last": "Mid"
        
         }
];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all places from database
    await User.remove({});
    // add the seed data to the database
    await User.create(userSeed);
    // get full list of places to confirm seeding worked
    const users = await User.find({});
    // return full list of places as JSON
    res.json(users);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//GET Route for ALL 
router.get("/", async (req, res) => {
  try {
  res.json(await User.find({}));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});

//DElete Route
router.delete("/:id", async (req, res) => {
  res.json(await User.findByIdAndRemove(req.params.id));
});

//GET route for single 
router.get("/:id", async (req, res) => {
  try {
  res.json(await User.findById(req.params.id));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});


// update Route for the favorites will only set if unqiue 
router.put("/faves/:id", async (req, res) => {
    console.log(req.body.faves)
    console.log(req.body)
    console.log(typeof req.body.faves)
    try {
      
      // pass the request body to update and existing place in the database
      const updatedUserFaves = await User.findByIdAndUpdate(
        req.params.id,
        { $addToSet: {faves: req.body.faves}},
        { new: true }
      );
      // send newly updated place back as JSON
      
      res.json(updatedUserFavs); 
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  

  // will remove the fave from the user 
  router.put("/faves/remove/:id", async (req, res) => {
    console.log(req.body.faves)
    console.log(req.body)
    console.log(typeof req.body.faves)
    try {
      
      // pass the request body to update and existing place in the database
      const updatedUserFaves = await User.findByIdAndUpdate(
        req.params.id,
        { $pull: {faves: req.body.faves}},
        { new: true }
      );
      // send newly updated place back as JSON
      
      res.json(updatedUserFavs); 
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  

  //CREATE NEW USER
  router.post("/", async (req, res) => {
    try {
      // pass the request body to create a new place in the database
      const newUser = await User.create(req.body);
      // send newly created place back as JSON
      res.json(newUser);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      // pass the request body to update and existing place in the database
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      // send newly updated place back as JSON
      res.json(updatedUser);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });

module.exports = router;
