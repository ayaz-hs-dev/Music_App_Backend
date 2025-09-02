const express = require("express");
const {
  addSong,
  getSongs,
  deleteSong,
  deleteAllSong,deleteSongBySongId
} = require("../controllers/musicController");

const router = express.Router();

router.post("/", addSong);       // Create
router.get("/:userId", getSongs);          // Read all
router.delete("/:id", deleteSong);  // Delete
router.delete("/:songId/:userId", deleteSongBySongId); // Delete
router.delete("/", deleteAllSong);  // Delete

module.exports = router;
