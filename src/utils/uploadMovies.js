import content from "../data/content";
import { supabase } from "../lib/config";
import { createEmbedding } from "./createEmbedding";

export async function uploadMovies() {
  console.log("Uploading movies...");

  for (const movie of content) {
    try {
      console.log(`Embedding: ${movie.title}`);

      const embedding = await createEmbedding(movie.content);

      const { error } = await supabase
        .from("movies")
        .insert({
          title: movie.title,
          release_year: Number(movie.releaseYear),
          content: movie.content,
          embedding,
        });

      if (error) {
        console.error(movie.title, error);
      } else {
        console.log(`${movie.title} uploaded`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  console.log("Finished uploading.");
}