import express from "express";
import {
  register,
  login,
  logout,
  getAllUsers
} from "../controllers/user.controller.js";

const router = express.Router();

// Define your routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/all", getAllUsers);

// ✅ This is the key line:
export default router;
