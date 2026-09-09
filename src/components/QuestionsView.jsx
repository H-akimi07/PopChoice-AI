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
      const preferenceProfile = `
My favorite movie is ${favoriteMovie} because ${reason}.

I am looking for something ${movieType}.

I want something ${mood}.
`;

      console.log("📝 Preference profile:", preferenceProfile);

      console.log("🧠 Creating user preference embedding...");

      const userEmbedding = await createEmbedding(preferenceProfile);

      console.log("✅ User embedding created:", userEmbedding.length);

      console.log("🔎 Searching movie database...");

      const movies = await searchMovies(userEmbedding, 1);

      const movie = movies[0];

      console.log("🎬 Best matching movie:", movie);

      console.log("🤖 Generating personalized explanation...");

      const explanation = await generateExplanation(preferenceProfile, movie);

      console.log("✅ Explanation generated");

      setRecommendation({
        movie,
        explanation,
      });

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
    <main className="popchoice-page">
      {/* Ambient background */}
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <div className="film-grain"></div>

      {screen === "loading" && <LoadingState />}

      {screen === "form" && (
        <section className="question-container">
          {/* Brand */}
          <div className="brand">
            <div className="brand-mark">
              <span>▶</span>
            </div>

            <span className="brand-name">PopChoice</span>

            <span className="brand-ai">AI</span>
          </div>

          {/* Hero */}
          <div className="question-hero">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              PERSONALIZED MOVIE DISCOVERY
              <span className="eyebrow-line"></span>
            </div>

            <h1>
              Find a movie
              <span> made for you.</span>
            </h1>

            <p>
              Tell us what you love, how you feel, and what you're looking for.
              We'll find your perfect match.
            </p>
          </div>

          {/* Progress */}
          <div className="progress-header">
            <span>Your movie profile</span>
            <span className="progress-number">01 / 04</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">!</span>
              {error}
            </div>
          )}

          {/* Question 1 */}
          <div className="question-card">
            <div className="question-number">01</div>

            <div className="question-content">
              <label htmlFor="favoriteMovie">
                What's a movie you absolutely love?
              </label>

              <p className="question-hint">
                Give us a title that represents your taste.
              </p>

              <div className="input-wrapper">
                <span className="input-icon">🎬</span>

                <input
                  id="favoriteMovie"
                  type="text"
                  placeholder="e.g. Interstellar"
                  value={favoriteMovie}
                  onChange={(e) => setFavoriteMovie(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="question-card">
            <div className="question-number">02</div>

            <div className="question-content">
              <label htmlFor="reason">What makes you love it?</label>

              <p className="question-hint">
                Tell us about the story, characters, feeling, or anything else.
              </p>

              <div className="textarea-wrapper">
                <textarea
                  id="reason"
                  placeholder="I love it because..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />

                <span className="textarea-count">
                  {reason.length} characters
                </span>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="question-card">
            <div className="question-number">03</div>

            <div className="question-content">
              <label>What era speaks to you?</label>

              <p className="question-hint">
                Choose the kind of movie experience you want.
              </p>

              <div className="choice-grid">
                <label
                  className={`choice-card ${
                    movieType === "New" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="New"
                    checked={movieType === "New"}
                    onChange={(e) => setMovieType(e.target.value)}
                  />

                  <span className="choice-icon">✦</span>

                  <span className="choice-text">
                    <strong>New</strong>
                    <small>Fresh & modern</small>
                  </span>

                  <span className="choice-check">✓</span>
                </label>

                <label
                  className={`choice-card ${
                    movieType === "Classic" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="Classic"
                    checked={movieType === "Classic"}
                    onChange={(e) => setMovieType(e.target.value)}
                  />

                  <span className="choice-icon">◈</span>

                  <span className="choice-text">
                    <strong>Classic</strong>
                    <small>Timeless & iconic</small>
                  </span>

                  <span className="choice-check">✓</span>
                </label>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="question-card">
            <div className="question-number">04</div>

            <div className="question-content">
              <label>What's your mood tonight?</label>

              <p className="question-hint">
                We'll use your mood to fine-tune the recommendation.
              </p>

              <div className="choice-grid">
                <label
                  className={`choice-card ${mood === "Fun" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    value="Fun"
                    checked={mood === "Fun"}
                    onChange={(e) => setMood(e.target.value)}
                  />

                  <span className="choice-icon">☻</span>

                  <span className="choice-text">
                    <strong>Fun</strong>
                    <small>Light & entertaining</small>
                  </span>

                  <span className="choice-check">✓</span>
                </label>

                <label
                  className={`choice-card ${
                    mood === "Serious" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="Serious"
                    checked={mood === "Serious"}
                    onChange={(e) => setMood(e.target.value)}
                  />

                  <span className="choice-icon">◐</span>

                  <span className="choice-text">
                    <strong>Serious</strong>
                    <small>Deep & meaningful</small>
                  </span>

                  <span className="choice-check">✓</span>
                </label>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="recommend-button" onClick={handleContinue}>
            <span className="button-sparkle">✦</span>

            <span>Find My Movie</span>

            <span className="button-arrow">→</span>
          </button>

          <div className="privacy-note">
            <span>✦</span>
            Your answers are used only to personalize your recommendation.
          </div>
        </section>
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
    </main>
  );
}

export default QuestionsView;
