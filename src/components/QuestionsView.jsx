import { useState } from "react";
import ResultView from "./ResultView";
import LoadingState from "./LoadingState";
import { createEmbedding } from "../utils/createEmbedding";
import { searchMovies } from "../utils/searchMovies";
import { generateExplanation } from "../utils/generateExplanation";
import "./QuestionsView.css";

function QuestionsView() {
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [reason, setReason] = useState("");
  const [movieType, setMovieType] = useState("");
  const [mood, setMood] = useState("");

  const [screen, setScreen] = useState("form");
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState("");

  async function handleContinue() {
    console.log("🚨 Recommend button clicked");
    if (!favoriteMovie.trim() || !reason.trim() || !movieType || !mood) {
      setError("Please answer all questions before continuing.");
      return;
    }

    setError("");
    setScreen("loading");

    try {
      // 1. Build the user's preference profile
      const preferenceProfile = `
My favorite movie is ${favoriteMovie} because ${reason}.

I am looking for something ${movieType}.

I want something ${mood}.
`;

      console.log("📝 Preference profile:", preferenceProfile);

      // 2. Create embedding from user preferences
      console.log("🧠 Creating user preference embedding...");

      const userEmbedding = await createEmbedding(preferenceProfile);

      console.log("✅ User embedding created:", userEmbedding.length);

      // 3. Search Supabase using vector similarity
      console.log("🔎 Searching movie database...");

      const movies = await searchMovies(userEmbedding, 1);

      const movie = movies[0];

      console.log("🎬 Best matching movie:", movie);

      // 4. Generate personalized AI explanation
      console.log("🤖 Generating personalized explanation...");

      const explanation = await generateExplanation(preferenceProfile, movie);

      console.log("✅ Explanation generated");

      // 5. Save recommendation
      setRecommendation({
        movie,
        explanation,
      });

      // 6. Show result
      setScreen("result");
    } catch (error) {
      console.error("❌ Recommendation pipeline failed:", error);

      setError(
        "Something went wrong while finding your movie. Please try again.",
      );

      setScreen("form");
    }
  }

  function handleGoAgain() {
    setFavoriteMovie("");
    setReason("");
    setMovieType("");
    setMood("");
    setRecommendation(null);
    setError("");
    setScreen("form");
  }

  return (
    <div className="container">
      {screen === "loading" && <LoadingState />}

      {screen === "form" && (
        <>
          <h1>🎬 PopChoice</h1>

          <h2>Find Your Next Movie</h2>

          <p>Answer a few questions and let AI recommend a movie.</p>

          {error && <p className="error-message">{error}</p>}

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

          <div className="labels">
            <h3>What kind of mood are you in?</h3>

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
          </div>

          <button onClick={handleContinue}>Recommend a Movie</button>
        </>
      )}

      {screen === "result" && recommendation && (
        <ResultView
          recommendation={recommendation}
          favoriteMovie={favoriteMovie}
          reason={reason}
          movieType={movieType}
          mood={mood}
          onGoAgain={handleGoAgain}
        />
      )}
    </div>
  );
}

export default QuestionsView;
