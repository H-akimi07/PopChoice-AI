function LoadingState() {
  return (
    <section className="loading-screen">
      <div className="loading-orbit">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="loading-core">
          <span>▶</span>
        </div>
      </div>

      <div className="loading-brand">
        <span>POPCHOICE</span>
        <small>AI</small>
      </div>

      <h1>
        Finding your
        <span> perfect movie.</span>
      </h1>

      <p className="loading-message">
        We're analyzing your preferences and searching for the movie that fits
        your taste.
      </p>

      <div className="loading-progress">
        <div className="loading-progress-bar"></div>
      </div>

      <div className="loading-steps">
        <div className="loading-step complete">
          <span className="step-icon">✓</span>

          <div>
            <strong>Analyzing your movie taste</strong>
            <small>Understanding your preferences</small>
          </div>

          <span className="step-status">DONE</span>
        </div>

        <div className="loading-step complete">
          <span className="step-icon">✓</span>

          <div>
            <strong>Searching the movie collection</strong>
            <small>Finding your strongest matches</small>
          </div>

          <span className="step-status">DONE</span>
        </div>

        <div className="loading-step active">
          <span className="step-icon loading-dot">✦</span>

          <div>
            <strong>Creating your recommendation</strong>
            <small>Personalizing your movie match</small>
          </div>

          <span className="step-status">WORKING</span>
        </div>
      </div>

      <p className="loading-note">This usually takes only a few seconds</p>
    </section>
  );
}

export default LoadingState;
