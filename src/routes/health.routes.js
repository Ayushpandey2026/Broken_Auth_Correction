import express from "express";
import { callLLM } from "../config/openrouter.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await callLLM([{ role: "user", content: "ping" }]);
    res.json({ backend: "ok", llm: "ok" });
  } catch {
    res.status(500).json({ backend: "ok", llm: "failed" });
  }
});

export default router;
