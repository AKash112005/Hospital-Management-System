require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();   // ✅ create app FIRST

app.use(cors());         // ✅ then use middleware
app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");

app.use("/auth", authRoutes);
app.use("/patients", patientRoutes);

// start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
