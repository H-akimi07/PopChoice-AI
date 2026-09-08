import { useState } from "react";
import ResultView from "./ResultView";
import LoadingState from "./LoadingState";
import "./QuestionsView.css";

function QuestionsView() {
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [reason, setReason] = useState("");
  const [movieType, setMovieType] = useState("");
  const [mood, setMood] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [screen, setScreen] = useState("form");
  // "form" | "loading" | "result"

  async function handleContinue() {
    console.log("BTTON CLICKED");
    setScreen("loading");

    try {
      const result = await getRecommendation();
      console.log("AI RESULT RECEIVED", result);

      setAiResult(result);
      setScreen("result");

      console.log("SCREEN SET TO RESULT");
    } catch (error) {
      console.error("ERROR:", error);
      setScreen("form");
    }
  }
  async function getRecommendation() {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: `
You are an expert movie recommendation AI.

Based on the user's preferences, recommend 3 movies.

User Preferences:
- Favorite Movie: ${favoriteMovie}
- Reason: ${reason}
- Movie Type: ${movieType}
- Mood: ${mood}

Requirements:
- Recommend exactly 3 movies.
- Do not recommend the user's favorite movie.
- Choose movies that genuinely match their interests.
- Explain each recommendation briefly.
- Keep explanations short and engaging.

Return EXACTLY in this format:

🎬 Recommendation #1
Movie: [Movie Name]
Why: [Reason]

🎬 Recommendation #2
Movie: [Movie Name]
Why: [Reason]

🎬 Recommendation #3
Movie: [Movie Name]
Why: [Reason]
`,
            },
          ],
        }),
      },
    );

    const data = await response.json();
    return data.choices[0].message.content;
  }

  return (
    <div className="container">
      {screen === "loading" && <LoadingState />}

      {screen === "form" && (
        <>
          <h1>🎬 PopChoice</h1>

          <h2>Find Your Next Movie</h2>

          <p>Answer a few questions and let AI recommend a movie.</p>

          <div className="label">
            <label>What is your favorite movie?</label>
            <input
              type="text"
              value={favoriteMovie}
              onChange={(e) => setFavoriteMovie(e.target.value)}
            />
          </div>

          <div className="label">
            <label>Why do you like it?</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <div className="labels">
            <h3>Do you prefer New or Classic movies?</h3>

            <div className="options">
              <label className={`chip ${movieType === "New" ? "active" : ""}`}>
                <input
                  type="radio"
                  value="New"
                  checked={movieType === "New"}
                  onChange={(e) => setMovieType(e.target.value)}
                />
                🎬 New
              </label>

              <label
                className={`chip ${movieType === "Classic" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  value="Classic"
                  checked={movieType === "Classic"}
                  onChange={(e) => setMovieType(e.target.value)}
                />
                🎞️ Classic
              </label>
            </div>
          </div>

          <div className="options">
            <label className={`chip ${mood === "Fun" ? "active" : ""}`}>
              <input
                type="radio"
                value="Fun"
                checked={mood === "Fun"}
                onChange={(e) => setMood(e.target.value)}
              />
              😄 Fun
            </label>

            <label className={`chip ${mood === "Serious" ? "active" : ""}`}>
              <input
                type="radio"
                value="Serious"
                checked={mood === "Serious"}
                onChange={(e) => setMood(e.target.value)}
              />
              🧠 Serious
            </label>
          </div>

          <button onClick={handleContinue}>Continue</button>
        </>
      )}

      {screen === "result" && (
        <ResultView
          aiResult={aiResult}
          favoriteMovie={favoriteMovie}
          reason={reason}
          movieType={movieType}
          mood={mood}
        />
      )}
    </div>
  );
}

export default QuestionsView;
