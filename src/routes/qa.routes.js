import express from "express";
import { answerQuestion } from "../services/qa.service.js";

const router = express.Router();

router.post("/ask", answerQuestion);

export default router;
