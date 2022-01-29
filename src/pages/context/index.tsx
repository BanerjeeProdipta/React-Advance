import MovieProvider from "../../contexts/MoviesContext";
import Movies from "./Movies";

const MovieList = () => {
  return (
    <div>
      <h1>CONTEXT:</h1>{" "}
      <MovieProvider>
        <Movies />
      </MovieProvider>
    </div>
  );
};

export default MovieList;
