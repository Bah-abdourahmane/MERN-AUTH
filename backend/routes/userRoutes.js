import express from "express";
import {
  loginUser,
  getUserProfile,
  updadeUserProfile,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMidddleware.js";
const router = express.Router();

router.post("/", loginUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updadeUserProfile);
// router.route("/profile").get(getUserProfile).put(updadeUserProfile);

export default router;
