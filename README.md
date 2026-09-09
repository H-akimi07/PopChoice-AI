# 🎬 PopChoice


#Demo Link on Vercel
https://popchoice-ai-taupe.vercel.app/


### AI-Powered Movie Recommendation App

PopChoice is an AI-powered movie recommendation application that helps users discover movies based on their personal taste, preferences, and current mood.

Instead of simply selecting genres or browsing a large movie catalog, users describe a movie they already love, explain why they like it, choose between **New or Classic** movies, and select their current mood. PopChoice then uses semantic search and AI-generated explanations to find the movie that best matches their preferences.

---

## ✨ Features

- 🎬 **Personalized Movie Recommendations**
  - Tell PopChoice about a movie you already love.
  - Explain why you like it.
  - Choose between New and Classic movies.
  - Select your current mood.

- 🧠 **AI-Powered Preference Understanding**
  - User responses are converted into a semantic embedding.
  - The system understands the meaning behind the user's preferences rather than relying only on keywords.

- 🔎 **Semantic Movie Search**
  - PopChoice searches a movie database using vector similarity.
  - The system finds the movie that is semantically closest to the user's preferences.

- 🤖 **Personalized AI Explanation**
  - After finding the best match, AI generates a short explanation explaining why the movie fits the user's taste.

- 🎯 **Taste Profile**
  - The recommendation page shows the preferences used to create the recommendation.

- ⚡ **Interactive Loading Experience**
  - A cinematic loading screen communicates the different stages of the recommendation process.

- 📱 **Responsive Design**
  - Designed to work across desktop, tablet, and mobile screen sizes.

- 🔄 **Go Again**
  - Users can easily restart the recommendation process and receive another personalized recommendation.

---

## 🎥 How PopChoice Works

The recommendation process follows these steps:

```text
User Preferences
       ↓
Favorite Movie + Reason
       +
Movie Type + Mood
       ↓
Preference Profile
       ↓
OpenAI Embedding
       ↓
Vector Similarity Search
       ↓
Supabase Movie Database
       ↓
Best Matching Movie
       ↓
OpenAI Personalized Explanation
       ↓
🎬 Final Recommendation




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```
