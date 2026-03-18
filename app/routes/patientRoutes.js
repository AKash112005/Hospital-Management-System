const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");

// Add patient
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all patients
router.get("/", authMiddleware, async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

module.exports = router;