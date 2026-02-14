import fetch from "node-fetch";
import { ENV } from "./env.js";

export async function callLLM(messages) {
  const response = await fetch(
    `${ENV.OPENROUTER_BASE_URL}/chat/completions`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ENV.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: ENV.OPENROUTER_MODEL,
        messages
      })
    }
  );

  return response.json();
}
