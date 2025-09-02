const express = require("express");
const {
  addComment,
  getCommentsBySong,
  deleteAllComments
} = require("../controllers/commentController");

const router = express.Router();

router.post("/", addComment);       // Create
router.get("/song/:songId", getCommentsBySong);         // Read all
router.delete("/", deleteAllComments);         // Read all
 // Delete

module.exports = router;
