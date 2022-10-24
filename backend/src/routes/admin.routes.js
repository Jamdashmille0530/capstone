import express from "express";
import { getUserInfo, updateRole } from "../controllers/admin.controller";

const router = express.Router();

router.get("/userInfo", getUserInfo);
router.put("/updateRole/:id", updateRole);

export default router;
