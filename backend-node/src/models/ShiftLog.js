const mongoose = require("mongoose");

const shiftLogSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true
    },

    shiftDate: {
      type: Date,
      required: true
    },

    shiftType: {
      type: String,
      enum: ["Morning", "Evening", "Night"]
    },

    rawTranscription: String,

    structuredLog: {
      productionDetails: String,
      maintenanceDetails: String,
      additionalDetails: String
    },

    summary: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShiftLog", shiftLogSchema);