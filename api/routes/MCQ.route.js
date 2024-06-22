import express from "express";
import { createMCQ } from "../controllers/MCQ.controller.js";

const router = express.Router();

router.post("/createmcq", createMCQ);

export default router;