// All of the routes
const { Router } = require("express");
const listingsRouter = require("./listings");
const usersRouter = require("./users");

const router = Router();

// router.get("/", (req, res) => res.send("This is the api root"));

router.use("/listings", listingsRouter);
router.use("/users", usersRouter);

module.exports = router;
