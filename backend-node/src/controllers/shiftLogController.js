const ShiftLog = require("../models/ShiftLog");

// Create Shift Log
exports.createShiftLog = async (req, res) => {
  try {
    const {
      employeeId,
      shiftDate,
      shiftType,
      rawTranscription,
      structuredLog,
      summary
    } = req.body;

    const log = new ShiftLog({
      employeeId,
      shiftDate,
      shiftType,
      rawTranscription,
      structuredLog,
      summary
    });

    await log.save();

    res.status(201).json({
      message: "Shift log saved successfully",
      log
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

// Get all logs
exports.getLogs = async (req, res) => {
  try {
    const logs = await ShiftLog.find().sort({ createdAt: -1 });

    res.json(logs);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

// Get single log
exports.getLogById = async (req, res) => {
  try {
    const log = await ShiftLog.findById(req.params.id);

    res.json(log);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};