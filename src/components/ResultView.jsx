function ResultView({ aiResult, favoriteMovie, reason, movieType, mood }) {
  return (
    <div className="ai-result">
      <h1>🎬 Your Recommendation</h1>

      <pre className="result-box">{aiResult}</pre>

      <p>Based on your preferences, we think you'll enjoy this movie.</p>

      <hr />

      <h3>Your Answers</h3>

      <p>
        <strong>Favorite Movie:</strong> {favoriteMovie}
      </p>

      <p>
        <strong>Reason:</strong> {reason}
      </p>

      <p>
        <strong>Movie Type:</strong> {movieType}
      </p>

      <p>
        <strong>Mood:</strong> {mood}
      </p>
    </div>
  );
}

export default ResultView;
