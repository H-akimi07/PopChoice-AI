import { supabase } from "../lib/config";

export async function searchMovies(queryEmbedding, matchCount = 1) {
  try {
    const { data, error } = await supabase.rpc("match_movies", {
      query_embedding: queryEmbedding,
      match_count: matchCount,
    });

    if (error) {
      console.error("❌ Movie search error:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      throw new Error("No matching movies found.");
    }

    console.log("🎬 Matching movies:", data);

    return data;
  } catch (error) {
    console.error("❌ Semantic search failed:", error);
    throw error;
  }
}
