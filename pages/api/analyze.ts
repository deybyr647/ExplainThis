import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../components/openai-config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { code, explanation } = req.query;

  if (!code || typeof code !== "string") {
    return res.status(400).json({ error: "No code provided" });
  }

  const systemPrompt =
    explanation === "easy"
      ? "Explain the provided code at a 5th grade level."
      : "Explain what the provided code is doing in a concise way.";

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Better and cheaper than 3.5-turbo
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: code },
      ],
      temperature: 0,
      max_tokens: 250, // Slightly increased for better explanations
    });

    const explanationText = completion.choices[0].message.content;

    res.status(200).json({
      input: code,
      explanation: explanationText,
      level: explanation || "standard",
    });
  } catch (error: any) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "Failed to analyze code" });
  }
}
