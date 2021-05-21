// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
// const Store = require("../models/Store");
const Creem = require("../models/Creem");
const seedCreem = require("../db/seedCreemData.json")
// SEED DATA FOR SEED ROUTE
// const todoSeed = [
//   {
//   name: "First Todo 1",
//   body: "This is where text is stored",
//   done: false }
// ];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all places from database
    await Creem.remove({});
    // add the seed data to the database
    await Creem.create(seedCreem);
    // get full list of places to confirm seeding worked
    const creems = await Creem.find({});
    // return full list of places as JSON
    res.json(creems);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//GET Route for ALL 
router.get("/", async (req, res) => {
  try {
  res.json(await Creem.find({}));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});

//GET route for single creem

router.get('/:id', async (req, res) => {
   const creem = await Creem.findById(req.params.id)
    res.json(creem)
});

//GET Route for partial search on name 

router.get("/search/:search", async (req, res) => {
  try {
  res.json(await Creem.find({ name: { $regex: req.params.search, $options: "i" } }));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});

// update Route for the rating
router.put("/rating/:id", async (req, res) => {
  console.log(req.body.rating)
  try {
    
    // pass the request body to update and existing place in the database
    const updatedCreem = await Creem.findByIdAndUpdate(
      req.params.id,
      { $push: {rating: req.body.rating}},
      { new: true }
    );
    // send newly updated place back as JSON
    
    res.json(updatedCreem);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// POST NEW creem to db 

router.post("/", async (req, res) => {
  try {
    // pass the request body to create a new place in the database
    const newCreem = await Creem.create(req.body);
    // send newly created place back as JSON
    res.json(newCreem);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//DElete Route
router.delete("/:id", async (req, res) => {
  res.json(await Creem.findByIdAndRemove(req.params.id));
});
module.exports = router;