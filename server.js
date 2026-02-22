const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./authroutes"));
app.use("/api/chat", require("./chat"));

// Root route (VERY IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("Peer to Peer Skill Exchange API Running 🚀");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
