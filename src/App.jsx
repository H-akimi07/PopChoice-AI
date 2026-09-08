import { useEffect } from "react";
import QuestionsView from "./components/QuestionsView";
import { uploadMovies } from "./utils/uploadMovies";


function App() {
  useEffect(() => {
    uploadMovies();
  }, []);

  return (
    <QuestionsView />
  );
}

export default App;