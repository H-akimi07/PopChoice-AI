import { openai } from "../lib/config";

export async function generateExplanation(userPreferences, movie) {
  try {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful and knowledgeable movie recommendation expert. Give concise, natural, personalized explanations.",
        },
        {
          role: "user",
          content: `
User preferences:
${userPreferences}

Recommended movie:
Title: ${movie.title}
Release year: ${movie.release_year}
Description: ${movie.content}

Explain why this movie is a good match for the user's preferences.

Requirements:
- Be personalized
- Reference the user's preferences
- Explain why the recommended movie fits
- Keep the explanation to 2-3 sentences
- Do not recommend another movie
- Do not mention embeddings, vector search, databases, or AI systems
`,
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("❌ Explanation generation error:", error);
    throw error;
  }
}
