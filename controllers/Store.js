// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Store = require("../models/Store");
// const Creem = require("../models/Creem");
const seedStore = require("../db/seedStoreData.json")
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
    await Store.remove({});
    // add the seed data to the database
    await Store.create(seedStore);
    // get full list of places to confirm seeding worked
    const stores = await Store.find({});
    // return full list of places as JSON
    res.json(stores);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//GET Route for ALL 
router.get("/", async (req, res) => {
  try {
  res.json(await Store.find({}));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});

//DElete Route
router.delete("/:id", async (req, res) => {
  res.json(await Store.findByIdAndRemove(req.params.id));
});

//GET route for single store
router.get("/data/:id", async (req, res) => {
  try {
  res.json(await Store.findById(req.params.id));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});


//GET Route for partial search on name 

router.get("/search/:search", async (req, res) => {
  try {
  res.json(await Store.find({ name: { $regex: req.params.search, $options: "i" } }));
}
catch (error) {
  // return error as JSON with an error status
  res.status(400).json(error);
}
});




// CREATE Route
router.post("/", async (req, res) => {
  try {
    // pass the request body to create a new place in the database
    const newStore = await Store.create(req.body);
    // send newly created place back as JSON
    res.json(newStore);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// update Route
router.put("/:id", async (req, res) => {
  try {
    // pass the request body to update and existing place in the database
    const updatedStore = await Store.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // send newly updated place back as JSON
    res.json(updatedStore);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// update Route for the entire Store
router.delete("/:id", async (req, res) => {
  try {
    // delete existing place in the database
    const deletedStore = await Store.findByIdAndRemove(req.params.id);
    // send delete place back as JSON
    res.json(deletedStore);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// update Route for the rating
router.put("/rating/:id", async (req, res) => {
  console.log(req.body.rating)
  try {
    
    // pass the request body to update and existing place in the database
    const updatedStore = await Store.findByIdAndUpdate(
      req.params.id,
      { $push: {rating: req.body.rating}},
      { new: true }
    );
    // send newly updated place back as JSON
    
    res.json(updatedStore);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// export the router which has all our routes registered to it
module.exports = router;
