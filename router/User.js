const express = require("express");
const {register,getUsers} = require("../controller/User");
const router = express.Router();
router.post("/signup",register);
router.get("/allusers",getUsers)

module.exports = router;