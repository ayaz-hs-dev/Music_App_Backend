const express = require("express");
const {
  createUser,
  signIn,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteUsers
} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);       // Create
router.post("/signin", signIn);    // signin
router.get("/", getUsers);          // Read all
router.get("/:id", getUserById);    // Read one
router.put("/:id", updateUser);     // Update
router.delete("/:id", deleteUser);  // Delete
router.delete("/", deleteUsers);  // Delete

module.exports = router;
