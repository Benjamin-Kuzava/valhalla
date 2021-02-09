const { Router } = require("express");
const controllers = require("../controllers/users");

const router = Router();

// Routes
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
router.post("/change-password", controllers.changePassword); // not created

module.exports = router;
