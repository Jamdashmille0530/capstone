import express from "express";
import { addEvent, deleteEvent } from "../controllers/calendar.controller";

const router = express.Router();

router.post("/add", addEvent);
router.delete("/delete/:id", deleteEvent);

export default router;
