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
    <section className="relative z-10 min-h-screen w-full overflow-hidden bg-[#050509] px-5 py-8 text-white sm:px-8 lg:px-10">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-purple-600/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[500px] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-[900px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/[0.05] blur-[130px]" />

      {/* Header */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 via-purple-600 to-fuchsia-600 shadow-[0_0_22px_rgba(139,92,246,0.3)]">
            <span className="translate-x-[1px] text-sm text-white">▶</span>
          </div>

          <span className="text-sm font-extrabold tracking-[0.08em] text-white">
            PopChoice
          </span>

          <span className="rounded-md border border-purple-400/20 bg-purple-400/10 px-1.5 py-0.5 text-[8px] font-bold tracking-[0.15em] text-purple-300">
            AI
          </span>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-purple-400/15 bg-purple-400/[0.06] px-3 py-1.5 sm:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-300 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />

          <span className="text-[9px] font-bold tracking-[0.18em] text-purple-300">
            PERSONALIZED MATCH
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-4xl pb-12 pt-16 text-center sm:pt-20">
        <div className="mb-6 flex items-center justify-center gap-3 text-[9px] font-bold tracking-[0.3em] text-purple-300">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400/60" />
          <span>✦</span>
          YOUR MOVIE MATCH
          <span>✦</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400/60" />
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
          We found something
          <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
            you'll love.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">
          Based on your taste, preferences, and the mood you're in.
        </p>
      </div>

      {/* Recommendation Card */}
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:grid-cols-[280px_1fr]">
        {/* Movie Visual */}
        <div className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#171126] via-[#0d0b17] to-[#08080d]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22),transparent_55%)]" />

          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-fuchsia-600/10 blur-3xl" />

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-purple-300/10 bg-purple-500/[0.06] shadow-[0_0_80px_rgba(139,92,246,0.15)]">
            <div className="absolute inset-4 animate-pulse rounded-full border border-purple-400/10" />

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 via-purple-600 to-fuchsia-700 shadow-[0_0_35px_rgba(139,92,246,0.45)]">
              <span className="translate-x-[2px] text-2xl text-white">▶</span>
            </div>
          </div>

          <div className="relative mt-8 flex flex-col items-center text-[10px] font-extrabold tracking-[0.35em] text-purple-300/70">
            <span>POP</span>
            <span>CHOICE</span>
          </div>
        </div>

        {/* Movie Details */}
        <div className="flex flex-col">
          <div className="p-7 sm:p-9">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[0.25em] text-purple-300">
                YOUR MATCH
              </span>

              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[10px] font-semibold text-zinc-400">
                {movie.release_year}
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
              {movie.title}
            </h2>

            {/* Match Score */}
            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-purple-400/10 bg-purple-500/[0.045] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.12)]">
                ✦
              </div>

              <div>
                <strong className="block text-sm font-semibold text-white">
                  Perfectly matched
                </strong>

                <span className="mt-1 block text-xs text-zinc-500">
                  Based on your movie profile
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-white/[0.06] px-7 py-7 sm:px-9">
            <div className="mb-4 flex items-center gap-2 text-[9px] font-bold tracking-[0.22em] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              ABOUT THE MOVIE
            </div>

            <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
              {movie.content}
            </p>
          </div>

          {/* AI Explanation */}
          <div className="border-t border-purple-400/10 bg-purple-500/[0.035] px-7 py-7 sm:px-9">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 text-lg text-purple-300">
                ✦
              </div>

              <div>
                <span className="block text-[8px] font-bold tracking-[0.2em] text-purple-300">
                  POPCHOICE AI
                </span>

                <strong className="mt-1 block text-sm font-semibold text-white">
                  Why this is your match
                </strong>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300">
              {explanation}
            </p>
          </div>
        </div>
      </div>

      {/* Taste Profile */}
      <div className="mx-auto max-w-6xl pb-12 pt-16">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-[9px] font-bold tracking-[0.25em] text-purple-300">
              YOUR PROFILE
            </span>

            <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
              What we learned about you
            </h3>
          </div>

          <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-600">
            04 SIGNALS
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Favorite Movie */}
          <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]">
            <span className="text-xl">🎬</span>

            <div className="mt-5">
              <small className="block text-[8px] font-bold tracking-[0.18em] text-zinc-600">
                FAVORITE MOVIE
              </small>

              <strong className="mt-2 block break-words text-sm font-semibold text-zinc-200">
                {favoriteMovie}
              </strong>
            </div>
          </div>

          {/* Movie Era */}
          <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]">
            <span className="text-xl text-purple-300">✦</span>

            <div className="mt-5">
              <small className="block text-[8px] font-bold tracking-[0.18em] text-zinc-600">
                MOVIE ERA
              </small>

              <strong className="mt-2 block text-sm font-semibold text-zinc-200">
                {movieType}
              </strong>
            </div>
          </div>

          {/* Mood */}
          <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]">
            <span className="text-xl text-purple-300">◐</span>

            <div className="mt-5">
              <small className="block text-[8px] font-bold tracking-[0.18em] text-zinc-600">
                YOUR MOOD
              </small>

              <strong className="mt-2 block text-sm font-semibold text-zinc-200">
                {mood}
              </strong>
            </div>
          </div>

          {/* Reason */}
          <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]">
            <span className="text-2xl text-purple-300">“</span>

            <div className="mt-3">
              <small className="block text-[8px] font-bold tracking-[0.18em] text-zinc-600">
                WHAT YOU LOVE
              </small>

              <strong className="mt-2 block line-clamp-3 text-sm font-semibold leading-6 text-zinc-200">
                {reason}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto flex max-w-6xl flex-col items-center border-t border-white/[0.06] pb-8 pt-10 text-center">
        <button
          onClick={onGoAgain}
          className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-7 py-4 text-sm font-bold text-white shadow-[0_10px_35px_rgba(139,92,246,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(139,92,246,0.38)] active:translate-y-0"
        >
          <span className="text-lg transition-transform duration-300 group-hover:rotate-180">
            ↻
          </span>
          Find Another Movie
          <span className="text-purple-100/70 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        <p className="mt-4 text-[11px] tracking-wide text-zinc-600">
          Your next favorite movie might be one click away.
        </p>
      </div>
    </section>
  );
}

export default ResultView;
