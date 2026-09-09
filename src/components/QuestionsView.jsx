import { useState } from "react";
import ResultView from "./ResultView";
import LoadingState from "./LoadingState";
import { createEmbedding } from "../utils/createEmbedding";
import { searchMovies } from "../utils/searchMovies";
import { generateExplanation } from "../utils/generateExplanation";

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
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050509] text-white">
      {/*           AMBIENT BACKGROUND
       */}

      <div className="pointer-events-none absolute left-45 top-45 h-125 w-125 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-55 right-37.5 h-137.5 w-137.5 rounded-full bg-fuchsia-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-violet-500/4 blur-[100px]" />

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] bg-size:4px_4px]" />

      {screen === "loading" && <LoadingState />}

      {screen === "form" && (
        <section className="relative z-10 mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          {/*               BRAND
           */}

          <div className="mb-16 flex items-center justify-center gap-3 sm:mb-20">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/6 shadow-lg shadow-purple-500/10">
              <span className="translate-x-1px text-sm text-purple-300">▶</span>
            </div>

            <span className="text-lg font-bold tracking-[-0.02em] text-white">
              PopChoice
            </span>

            <span className="rounded-md border border-purple-400/20 bg-purple-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-purple-300">
              AI
            </span>
          </div>

          {/*               HERO
           */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-7 flex items-center justify-center gap-3 text-[9px] font-bold tracking-[0.25em] text-purple-300 sm:text-[10px]">
              <span className="h-px w-8 bg-purple-400/30 sm:w-12" />

              <span>PERSONALIZED MOVIE DISCOVERY</span>

              <span className="h-px w-8 bg-purple-400/30 sm:w-12" />
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.03] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Find a movie
              <span className="block bg-linear-to-r from-purple-300 via-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                made for you.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Tell us what you love, how you feel, and what you're looking for.
              We'll find your perfect match.
            </p>
          </div>

          {/*               PROGRESS
           */}

          <div className="mx-auto mt-14 max-w-3xl sm:mt-16">
            <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              <span>Your movie profile</span>

              <span className="text-purple-300">01 / 04</span>
            </div>

            <div className="h-0.75 overflow-hidden rounded-full bg-white/[0.07]">
              <div className="h-full w-1/4 rounded-full bg-linear-to-r from-purple-500 to-fuchsia-400 shadow-lg shadow-purple-500/30" />
            </div>
          </div>

          {/*    ERROR   */}

          {error && (
            <div className="mx-auto mt-6 flex max-w-3xl items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/[0.07] px-5 py-4 text-sm text-red-200">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-400/10 font-bold text-red-300">
                !
              </span>

              <span>{error}</span>
            </div>
          )}

          {/*               QUESTION 1           */}

          <div className="group mx-auto mt-8 max-w-3xl rounded-[22px] border border-white/8 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-300/20 hover:bg-white/5 sm:p-8">
            <div className="flex gap-5">
              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/8 text-[10px] font-bold tracking-wider text-purple-300 sm:flex">
                01
              </div>

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="favoriteMovie"
                  className="block text-base font-semibold tracking-[-0.01em] text-white sm:text-lg"
                >
                  What's a movie you absolutely love?
                </label>

                <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                  Give us a title that represents your taste.
                </p>

                <div className="relative mt-6">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base">
                    🎬
                  </span>

                  <input
                    id="favoriteMovie"
                    type="text"
                    placeholder="e.g. Interstellar"
                    value={favoriteMovie}
                    onChange={(e) => setFavoriteMovie(e.target.value)}
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/20 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-400/50 focus:bg-purple-500/3 focus:ring-4 focus:ring-purple-500/6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*               QUESTION 2
           */}

          <div className="group mx-auto mt-4 max-w-3xl rounded-[22px] border border-white/8 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-300/20 hover:bg-white/5 sm:p-8">
            <div className="flex gap-5">
              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/8 text-[10px] font-bold tracking-wider text-purple-300 sm:flex">
                02
              </div>

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="reason"
                  className="block text-base font-semibold tracking-[-0.01em] text-white sm:text-lg"
                >
                  What makes you love it?
                </label>

                <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                  Tell us about the story, characters, feeling, or anything
                  else.
                </p>

                <div className="relative mt-6">
                  <textarea
                    id="reason"
                    placeholder="I love it because..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="min-h-36 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-4 pb-10 text-sm leading-6 text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-400/50 focus:bg-purple-500/3 focus:ring-4 focus:ring-purple-500/6"
                  />

                  <span className="absolute bottom-3 right-4 text-[10px] text-zinc-600">
                    {reason.length} characters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*               QUESTION 3
           */}

          <div className="group mx-auto mt-4 max-w-3xl rounded-[22px] border border-white/8 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-300/20 hover:bg-white/5 sm:p-8">
            <div className="flex gap-5">
              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/8 text-[10px] font-bold tracking-wider text-purple-300 sm:flex">
                03
              </div>

              <div className="min-w-0 flex-1">
                <label className="block text-base font-semibold tracking-[-0.01em] text-white sm:text-lg">
                  What era speaks to you?
                </label>

                <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                  Choose the kind of movie experience you want.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* New */}
                  <label
                    className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                      movieType === "New"
                        ? "border-purple-400/50 bg-purple-500/10 shadow-lg shadow-purple-500/8"
                        : "border-white/8 bg-black/10 hover:border-white/15 hover:bg-white/3"
                    }`}
                  >
                    <input
                      type="radio"
                      value="New"
                      checked={movieType === "New"}
                      onChange={(e) => setMovieType(e.target.value)}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg transition-all ${
                        movieType === "New"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-white/5 text-zinc-500"
                      }`}
                    >
                      ✦
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col">
                      <strong className="text-sm font-semibold text-white">
                        New
                      </strong>

                      <small className="mt-1 text-xs text-zinc-500">
                        Fresh & modern
                      </small>
                    </span>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition-all ${
                        movieType === "New"
                          ? "bg-purple-400 text-black"
                          : "border border-white/10 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </label>

                  {/* Classic */}
                  <label
                    className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                      movieType === "Classic"
                        ? "border-purple-400/50 bg-purple-500/10 shadow-lg shadow-purple-500/8"
                        : "border-white/8 bg-black/10 hover:border-white/15 hover:bg-white/3"
                    }`}
                  >
                    <input
                      type="radio"
                      value="Classic"
                      checked={movieType === "Classic"}
                      onChange={(e) => setMovieType(e.target.value)}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg transition-all ${
                        movieType === "Classic"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-white/5 text-zinc-500"
                      }`}
                    >
                      ◈
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col">
                      <strong className="text-sm font-semibold text-white">
                        Classic
                      </strong>

                      <small className="mt-1 text-xs text-zinc-500">
                        Timeless & iconic
                      </small>
                    </span>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition-all ${
                        movieType === "Classic"
                          ? "bg-purple-400 text-black"
                          : "border border-white/10 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/*               QUESTION 4
           */}

          <div className="group mx-auto mt-4 max-w-3xl rounded-[22px] border border-white/8 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-300/20 hover:bg-white/5 sm:p-8">
            <div className="flex gap-5">
              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/8 text-[10px] font-bold tracking-wider text-purple-300 sm:flex">
                04
              </div>

              <div className="min-w-0 flex-1">
                <label className="block text-base font-semibold tracking-[-0.01em] text-white sm:text-lg">
                  What's your mood tonight?
                </label>

                <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                  We'll use your mood to fine-tune the recommendation.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Fun */}
                  <label
                    className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                      mood === "Fun"
                        ? "border-purple-400/50 bg-purple-500/10 shadow-lg shadow-purple-500/8"
                        : "border-white/8 bg-black/10 hover:border-white/15 hover:bg-white/5"
                    }`}
                  >
                    <input
                      type="radio"
                      value="Fun"
                      checked={mood === "Fun"}
                      onChange={(e) => setMood(e.target.value)}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg transition-all ${
                        mood === "Fun"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-white/5 text-zinc-500"
                      }`}
                    >
                      ☻
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col">
                      <strong className="text-sm font-semibold text-white">
                        Fun
                      </strong>

                      <small className="mt-1 text-xs text-zinc-500">
                        Light & entertaining
                      </small>
                    </span>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition-all ${
                        mood === "Fun"
                          ? "bg-purple-400 text-black"
                          : "border border-white/10 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </label>

                  {/* Serious */}
                  <label
                    className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                      mood === "Serious"
                        ? "border-purple-400/50 bg-purple-500/10 shadow-lg shadow-purple-500/8"
                        : "border-white/8 bg-black/10 hover:border-white/15 hover:bg-white/5"
                    }`}
                  >
                    <input
                      type="radio"
                      value="Serious"
                      checked={mood === "Serious"}
                      onChange={(e) => setMood(e.target.value)}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg transition-all ${
                        mood === "Serious"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-white/5 text-zinc-500"
                      }`}
                    >
                      ◐
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col">
                      <strong className="text-sm font-semibold text-white">
                        Serious
                      </strong>

                      <small className="mt-1 text-xs text-zinc-500">
                        Deep & meaningful
                      </small>
                    </span>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition-all ${
                        mood === "Serious"
                          ? "bg-purple-400 text-black"
                          : "border border-white/10 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/*               CTA
           */}

          <div className="mx-auto mt-8 max-w-3xl">
            <button
              className="group relative flex h-16 w-full items-center justify-center gap-4 overflow-hidden rounded-2xl bg-linear-to-r from-purple-600 via-violet-500 to-fuchsia-500 px-6 font-semibold text-white shadow-2xl shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/20 active:translate-y-0"
              onClick={handleContinue}
            >
              <span className="text-purple-100 transition-transform duration-300 group-hover:rotate-12">
                ✦
              </span>

              <span className="text-sm tracking-wide">Find My Movie</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>

          {/*               PRIVACY
           */}

          <div className="mx-auto mt-5 flex max-w-3xl items-center justify-center gap-2 text-center text-[10px] leading-5 text-zinc-600 sm:text-xs">
            <span className="text-purple-400">✦</span>

            <span>
              Your answers are used only to personalize your recommendation.
            </span>
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
