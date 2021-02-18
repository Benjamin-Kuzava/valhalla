const Listing = require("../models/listing");
const User = require("../models/user");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (listing) {
      return res.json(listing);
    }
    res.status(404).json({ message: "Listing not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createListing = async (req, res) => {
  try {
    const listing = await new Listing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, listing) => {
      if (error) {
        res.status(500).json({ error: error.message });
      }
      if (!listing) {
        return res.status(404).json({ message: "Listing not found!" });
      }
      res.status(200).json(listing);
    }
  );
};

const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Listing.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted");
    }
    throw new Error("Product not found!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createListing,
  getListings,
  getListing,
  updateListing,
  deleteListing,
};
