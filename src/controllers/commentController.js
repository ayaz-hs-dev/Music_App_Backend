const Comment = require("../models/Comment");
const io = require("../server"); 

// CREATE
exports.addComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();

    // Emit to all connected clients in real-time
    // io.emit("receiveComment", comment); // broadcasts to all clients

    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// READ all comments for a given songId

// READ all comments for a song
exports.getCommentsBySong = async (req, res) => {
  try {
    const { songId } = req.params;

    if (!songId) {
      return res.status(400).json({ error: "songId is required" });
    }

    const comments = await Comment.find({ songId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAllComments = async (req, res) => {
  try {
    const result = await Comment.deleteMany({});
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "No comments found to delete" });
    }
    res.json({ message: "Comments deleted successfully", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
