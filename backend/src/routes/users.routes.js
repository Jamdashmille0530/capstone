import express from "express";
import {
  me,
  getUser,
  getAllUser,
  updateUser,
  getAllUserWithoutPass,
} from "../controllers/user.controller";
import { isAuth } from "../middlewares";

const router = express.Router();

// router.post("/create", createUser);
// router.get("/:id", getUser);
// router.get("/", getAllUser);
router.get("/me", isAuth, me);
router.put("/updateUser", updateUser);
router.get("/getAllUserWithoutPass", getAllUserWithoutPass);
export default router;
