require("dotenv").config();

const express = require("express");
const cors = require("cors");
<<<<<<< HEAD

const app = express();   // ✅ FIRST create app

app.use(cors());
app.use(express.json()); // ✅ AFTER app initialization

// routes
const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");

app.use("/auth", authRoutes);
app.use("/patients", patientRoutes);

// optional root route
app.get("/", (req, res) => {
  res.send("Hospital API is running 🚀");
});

=======

const app = express();   // ✅ create app FIRST

app.use(cors());         // ✅ then use middleware
app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");

app.use("/auth", authRoutes);
app.use("/patients", patientRoutes);

>>>>>>> 1fc472b (ui)
// start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 1fc472b (ui)
