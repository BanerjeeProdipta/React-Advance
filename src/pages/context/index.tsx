import MovieProvider from "../../components/contexts/MoviesContext";
import Movies from "./Movies";

function MovieList() {
  return (
    <div>
      <h1>CONTEXT:</h1>{" "}
      <MovieProvider>
        <Movies />
      </MovieProvider>
    </div>
  );
}

export default MovieList;
