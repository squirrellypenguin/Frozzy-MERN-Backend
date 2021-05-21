// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Store = require("../models/Store");
const Creem = require("../models/Creem");
// const seed = require("../db/seedData.json")
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
    await Creem.create(seed);
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
  res.json(await Store.find({}));
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

// update Route
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

// export the router which has all our routes registered to it
module.exports = router;