import express from "express";
import { createMCQ, getAllMCQ } from "../controllers/MCQ.controller.js";

const router = express.Router();

router.post("/createmcq", createMCQ);
router.get("/", getAllMCQ);

export default router;