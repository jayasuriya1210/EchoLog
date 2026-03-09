const express = require("express");
const router = express.Router();

const {
  createShiftLog,
  getLogs,
  getLogById
} = require("../controllers/shiftLogController");

// Create log
router.post("/", createShiftLog);

// Get all logs
router.get("/", getLogs);

// Get single log
router.get("/:id", getLogById);

module.exports = router;