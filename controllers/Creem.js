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

module.exports = router;