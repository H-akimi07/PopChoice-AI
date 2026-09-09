import content from "../data/content";
import { supabase } from "../lib/config";
import { createEmbedding } from "./createEmbedding";

export async function uploadMovies() {
  // Prevent duplicate uploads during React Strict Mode
  if (sessionStorage.getItem("movies_uploading") === "true") {
    console.log("⏭️ Movie upload already running. Skipping duplicate call.");
    return;
  }

  if (sessionStorage.getItem("movies_uploaded") === "true") {
    console.log("✅ Movies already uploaded. Skipping.");
    return;
  }

  sessionStorage.setItem("movies_uploading", "true");

  try {
    console.log("🎬 Starting movie database upload...");

    for (const movie of content) {
      try {
        const { data: existingMovie, error: checkError } = await supabase
          .from("movies")
          .select("id")
          .eq("title", movie.title)
          .maybeSingle();

        if (checkError) {
          console.error(`Error checking ${movie.title}:`, checkError);
          continue;
        }

        if (existingMovie) {
          console.log(`⏭️ ${movie.title} already exists. Skipping.`);
          continue;
        }

        console.log(`🧠 Creating embedding: ${movie.title}`);

        const embedding = await createEmbedding(movie.content);

        const { error } = await supabase.from("movies").insert({
          title: movie.title,
          release_year: movie.releaseYear,
          content: movie.content,
          embedding,
        });

        if (error) {
          console.error(`❌ ${movie.title}:`, error);
        } else {
          console.log(`✅ ${movie.title} uploaded`);
        }
      } catch (error) {
        console.error(`❌ Error with ${movie.title}:`, error);
      }
    }

    sessionStorage.setItem("movies_uploaded", "true");

    console.log("🎉 Movie database setup finished!");
  } finally {
    sessionStorage.removeItem("movies_uploading");
  }
}
