const Song = require("../models/Music");

// CREATE
exports.addSong = async (req, res) => {
  try {
    const song = new Song(req.body);

    await song.save();
    res.status(201).json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getSongs = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const songs = await Song.find({ userId });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE by Mongo _id
exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) return res.status(404).json({ error: "Song not found" });
    res.json({ message: "Song deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// DELETE by songId + userId
exports.deleteSongBySongId = async (req, res) => {
  try {
    const { songId, userId } = req.params;
    const song = await Song.findOneAndDelete({ songId, userId });
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    res.json({ message: "Song deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAllSong = async (req, res) => {
  try {
    const result = await Song.deleteMany({});
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "No songs found to delete" });
    }
    res.json({ message: "Songs deleted successfully", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

