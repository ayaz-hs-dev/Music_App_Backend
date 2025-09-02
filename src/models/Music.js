const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songId:{ type: String, required: true },
  userId:{ type: String, required: true },
  title: { type: String, required: true },
  artistName: { type: String, required: true },
  previewUrl: { type: String, required: true }, // URL or local path
  thumbnailUrl: { type: String, required: true }, 
}, { timestamps: true });

module.exports = mongoose.model("Song", songSchema);
