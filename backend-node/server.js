const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/authRoutes");
const shiftLogRoutes = require("./src/routes/shiftLogRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("ShiftLog API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/shiftlogs", shiftLogRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});