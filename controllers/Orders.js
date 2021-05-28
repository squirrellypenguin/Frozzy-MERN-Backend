
// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();
const mongoose = require('mongoose')
const { Router } = require("express");
//IMPORT OUR MODEL
const User = require("../models/Orders")
// const Creem = require("../models/Creem");
// const seedStore = require("../db/seedStoreData.json")
// SEED DATA FOR SEED ROUTE
const userSeed = [
  {
  "name": "Order 0",
  "creems": "60a92bea49a38fbe5d2d39c1",
  "user": "60b01fad483f76b130792531"
   },
   {
 "name": "Order 1",
 "creems": "60a92bea49a38fbe5d2d39c1",
 "user": "60b01fad483f76b130792531"
     },
     {
     "name": "Order Different USER",
     "creems": "60a92bea49a38fbe5d2d39c1",
     "user": "60b01fad483f76b130792532"
         }
    ]
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

router.get("/", async (req, res) => {
  try {
  res.json(await User.find({}));
}
catch (error) {
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

//GET route for orders by User

router.get("/history/:id", async (req, res) => {
  try {
  res.json(await User.find({ user: req.params.id}));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});


// // update Route for the favorites
// router.put("/faves/:id", async (req, res) => {
//     console.log(req.body.faves)
//     console.log(req.body)
//     console.log(typeof req.body.faves)
//     try {
      
//       // pass the request body to update and existing place in the database
//       const updatedUserFaves = await User.findByIdAndUpdate(
//         req.params.id,
//         { $push: {faves: req.body.faves}},
//         { new: true }
//       );
//       // send newly updated place back as JSON
      
//       res.json(updatedUserFavs); 
//     } catch (error) {
//       // return error as JSON with an error status
//       res.status(400).json(error);
//     }
//   });

  //CREATE NEW USER
  router.post("/", async (req, res) => {
    try {
      console.log(req.body)
      // pass the request body to create a new place in the database
      const newOrder = await User.create(req.body);
      // send newly created place back as JSON
      res.json(newOrder);
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
