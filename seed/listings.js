const db = require("../db/connection");
const Listing = require("../models/listings");

// Error if theres a problem running the seed file
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const listings = [
    {
      name: "insert data here",
      imgURL: "insert data here",
      description: "insert data here",
      price: "insert data here",
    },
  ];

  await Listing.insertMany(listings); // insert method from mongoose
  console.log("Created listings!");
};

// Ask what this does? :)
const run = async () => {
  await main();
  db.close();
};

run();
