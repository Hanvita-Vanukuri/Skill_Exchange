const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  name: String,
  email: String,
  bio: String,
  skills: [String],
  avatar: String,
  xp: { type: Number, default: 0 },
  badge: { type: String, default: "Newbie" }
});

module.exports = mongoose.model("User", userSchema);