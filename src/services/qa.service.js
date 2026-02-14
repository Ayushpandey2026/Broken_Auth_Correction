import fs from "fs";
import { callLLM } from "../config/openrouter.js";

export async function answerQuestion(req, res) {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const docs = JSON.parse(fs.readFileSync("src/data/documents.json"));

  if (docs.length === 0) {
    return res.status(400).json({ error: "No documents uploaded" });
  }

  const context = docs.map(d => d.content).join("\n\n");

  const messages = [
  {
    role: "system",
    content: `
You are a data extraction assistant.

Rules:
- Extract structured data from the context
- Output ONLY valid JSON
- Do NOT add explanations
- Do NOT add markdown
- Do NOT guess missing values
- If a company has multiple emails, return them as an array
- If no data found, return empty JSON {}

JSON format:
{
  "CompanyName": ["email1", "email2"]
}
`
  },
  {
    role: "user",
    content: `
Context:
${context}

Question:
${question}
`
  }
];


  const response = await callLLM(messages);

  res.json({
    answer: response.choices[0].message.content,
    sources: docs.map(d => d.name)
  });
}
