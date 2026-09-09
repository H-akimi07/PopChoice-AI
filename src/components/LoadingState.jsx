function LoadingState() {
  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 py-12 text-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.08] blur-[120px]" />

      {/*           CINEMATIC ORBIT      */}

      <div className="relative mb-10 flex h-32 w-32 items-center justify-center">
        {/* Outer orbit */}
        <div className="absolute h-32 w-32 animate-[spin_7s_linear_infinite] rounded-full border border-purple-400/20" />

        {/* Inner orbit */}
        <div className="absolute h-24 w-24 animate-[spin_4s_linear_infinite_reverse] rounded-full border border-fuchsia-400/20" />

        {/* Orbit particles */}
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-300 shadow-[0_0_15px_rgba(167,139,250,0.9)]" />

        <div className="absolute bottom-2 right-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />

        {/* Core */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 via-purple-600 to-fuchsia-700 shadow-[0_0_30px_rgba(139,92,246,0.45),0_0_80px_rgba(139,92,246,0.18)] animate-[pulse_2.2s_ease-in-out_infinite]">
          <span className="translate-x-[2px] text-2xl text-white">▶</span>
        </div>
      </div>

      {/*           BRAND      */}

      <div className="mb-5 flex items-center gap-2">
        <span className="text-[10px] font-extrabold tracking-[0.28em] text-purple-300">
          POPCHOICE
        </span>

        <span className="rounded-md border border-purple-400/20 bg-purple-400/10 px-1.5 py-0.5 text-[8px] font-bold tracking-[0.16em] text-purple-300">
          AI
        </span>
      </div>

      {/*           HEADLINE      */}

      <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
        Finding your
        <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
          perfect movie.
        </span>
      </h1>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
        We're analyzing your preferences and searching for the movie that fits
        your taste.
      </p>

      {/*           PROGRESS      */}

      <div className="mt-9 w-full max-w-md">
        <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-fuchsia-400 shadow-[0_0_14px_rgba(139,92,246,0.65)] animate-[loadingProgress_2.5s_ease-in-out_infinite]" />
        </div>
      </div>

      {/*           STEPS      */}

      <div className="mt-8 flex w-full max-w-lg flex-col gap-3 text-left">
        {/* Step 1 */}

        <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 backdrop-blur-xl">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-sm font-bold text-purple-300">
            ✓
          </span>

          <div className="min-w-0 flex-1">
            <strong className="block text-sm font-medium text-zinc-200">
              Analyzing your movie taste
            </strong>

            <small className="mt-1 block text-xs text-zinc-600">
              Understanding your preferences
            </small>
          </div>

          <span className="text-[9px] font-bold tracking-[0.15em] text-purple-300">
            DONE
          </span>
        </div>

        {/* Step 2 */}

        <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 backdrop-blur-xl">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-sm font-bold text-purple-300">
            ✓
          </span>

          <div className="min-w-0 flex-1">
            <strong className="block text-sm font-medium text-zinc-200">
              Searching the movie collection
            </strong>

            <small className="mt-1 block text-xs text-zinc-600">
              Finding your strongest matches
            </small>
          </div>

          <span className="text-[9px] font-bold tracking-[0.15em] text-purple-300">
            DONE
          </span>
        </div>

        {/* Step 3 */}

        <div className="flex items-center gap-4 rounded-2xl border border-purple-400/20 bg-purple-500/[0.05] px-4 py-4 shadow-lg shadow-purple-900/[0.08] backdrop-blur-xl">
          <span className="flex h-9 w-9 shrink-0 animate-pulse items-center justify-center rounded-xl bg-purple-500/15 text-sm text-purple-300">
            ✦
          </span>

          <div className="min-w-0 flex-1">
            <strong className="block text-sm font-medium text-white">
              Creating your recommendation
            </strong>

            <small className="mt-1 block text-xs text-zinc-500">
              Personalizing your movie match
            </small>
          </div>

          <span className="text-[9px] font-bold tracking-[0.15em] text-purple-300">
            WORKING
          </span>
        </div>
      </div>

      {/*           NOTE       */}

      <p className="mt-7 text-[11px] tracking-wide text-zinc-600">
        This usually takes only a few seconds
      </p>
    </section>
  );
}

export default LoadingState;
