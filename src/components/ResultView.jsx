function ResultView({
  recommendation,
  favoriteMovie,
  reason,
  movieType,
  mood,
  onGoAgain,
}) {
  const { movie, explanation } = recommendation;

  return (
    <section className="result-page">
      {/* Header */}
      <div className="result-topbar">
        <div className="brand result-brand">
          <div className="brand-mark">
            <span>▶</span>
          </div>

          <span className="brand-name">PopChoice</span>

          <span className="brand-ai">AI</span>
        </div>

        <div className="match-label">
          <span className="match-dot"></span>
          PERSONALIZED MATCH
        </div>
      </div>

      {/* Hero */}
      <div className="result-hero">
        <div className="result-eyebrow">
          <span>✦</span>
          YOUR MOVIE MATCH
          <span>✦</span>
        </div>

        <h1>
          We found something
          <span> you'll love.</span>
        </h1>

        <p>Based on your taste, preferences, and the mood you're in.</p>
      </div>

      {/* Recommendation */}
      <div className="recommendation-card">
        <div className="movie-visual">
          <div className="movie-glow"></div>

          <div className="movie-icon">
            <span>▶</span>
          </div>

          <div className="movie-label">
            <span>POP</span>
            <span>CHOICE</span>
          </div>
        </div>

        <div className="movie-details">
          <div className="movie-meta">
            <span>YOUR MATCH</span>

            <span className="movie-year">{movie.release_year}</span>
          </div>

          <h2>{movie.title}</h2>

          <div className="match-score">
            <div className="score-icon">✦</div>

            <div>
              <strong>Perfectly matched</strong>
              <span>Based on your movie profile</span>
            </div>
          </div>
        </div>

        <div className="movie-description">
          <div className="section-label">
            <span></span>
            ABOUT THE MOVIE
          </div>

          <p>{movie.content}</p>
        </div>

        <div className="ai-explanation">
          <div className="ai-title">
            <div className="ai-symbol">✦</div>

            <div>
              <span>POPCHOICE AI</span>
              <strong>Why this is your match</strong>
            </div>
          </div>

          <p>{explanation}</p>
        </div>
      </div>

      {/* Taste profile */}
      <div className="taste-section">
        <div className="taste-heading">
          <div>
            <span className="section-kicker">YOUR PROFILE</span>
            <h3>What we learned about you</h3>
          </div>

          <span className="taste-number">04 SIGNALS</span>
        </div>

        <div className="taste-grid">
          <div className="taste-card">
            <span className="taste-icon">🎬</span>

            <div>
              <small>FAVORITE MOVIE</small>
              <strong>{favoriteMovie}</strong>
            </div>
          </div>

          <div className="taste-card">
            <span className="taste-icon">✦</span>

            <div>
              <small>MOVIE ERA</small>
              <strong>{movieType}</strong>
            </div>
          </div>

          <div className="taste-card">
            <span className="taste-icon">◐</span>

            <div>
              <small>YOUR MOOD</small>
              <strong>{mood}</strong>
            </div>
          </div>

          <div className="taste-card reason-card">
            <span className="taste-icon">“</span>

            <div>
              <small>WHAT YOU LOVE</small>
              <strong>{reason}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="result-actions">
        <button className="again-button" onClick={onGoAgain}>
          <span>↻</span>
          Find Another Movie
        </button>

        <p>Your next favorite movie might be one click away.</p>
      </div>
    </section>
  );
}

export default ResultView;
