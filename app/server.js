require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hospital API Running 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
app.use(express.json());
app.use("/patients", require("./routes/patientRoutes"));