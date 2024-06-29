const express = require("express");
const {handleCreateUserById} = require("../controllers/user")

const router = express.Router();

router.route("/").post(handleCreateUserById);

module.exports = router;