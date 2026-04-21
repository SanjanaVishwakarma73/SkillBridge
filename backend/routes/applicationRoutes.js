const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.post("/applications", async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    // ✅ CHECK HERE (before saving)
    const existing = await Application.findOne({ userId, jobId });

    if (existing) {
      return res.status(400).json({ message: "Already applied" });
    }

    // ✅ CREATE NEW APPLICATION
    const app = new Application({ userId, jobId });
    await app.save();

    res.json({ message: "Applied successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;