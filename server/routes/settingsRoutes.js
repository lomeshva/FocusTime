const express = require("express");
const router = express.Router();
const { updateSettings } = require("../controllers/settingsController");

router.post("/update", updateSettings);

module.exports = router;