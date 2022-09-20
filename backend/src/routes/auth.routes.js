import express from "express";
import {
  login,
  refreshToken,
  register,
  revokedRefreshTokens,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refreshToken", refreshToken);
router.post("/revokedRefreshTokens", revokedRefreshTokens);

export default router;
