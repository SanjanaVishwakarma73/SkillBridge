console.log("Starting server...");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("SkillBridge API Running");
});

// DB connection
console.log("Connecting to MongoDB...");
async function startServer() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/skillbridge");
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });

  } catch (err) {
    console.error("DB Error:", err);
  }
}

startServer();
// routes
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");

app.use("/users", userRoutes);
app.use("/jobs", jobRoutes);

