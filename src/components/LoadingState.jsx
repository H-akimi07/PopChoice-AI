function LoadingState() {
  return (
    <div className="loading-screen">
      <div className="loading-icon">🎬</div>

      <h1>PopChoice</h1>

      <h2>Finding your perfect movie...</h2>

      <p className="loading-message">
        We're analyzing your preferences and searching for the best match.
      </p>

      <div className="loading-spinner"></div>

      <div className="loading-steps">
        <div className="loading-step">
          <span>✓</span>
          <p>Analyzing your movie taste</p>
        </div>

        <div className="loading-step">
          <span>✓</span>
          <p>Searching the movie collection</p>
        </div>

        <div className="loading-step">
          <span className="loading-dot">●</span>
          <p>Creating your personalized recommendation</p>
        </div>
      </div>

      <p className="loading-note">This may take a few seconds...</p>
    </div>
  );
}

export default LoadingState;
