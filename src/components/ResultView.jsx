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
    <div className="ai-result">
      <h1>🎬 Your Recommendation</h1>

      <div className="recommendation-card">
        <h2>{movie.title}</h2>

        <p className="release-year">{movie.release_year}</p>

        <h3>About the Movie</h3>

        <p>{movie.content}</p>

        <h3>Why We Recommend It</h3>

        <p>{explanation}</p>
      </div>

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

      <button onClick={onGoAgain}>Go Again</button>
    </div>
  );
}

export default ResultView;
