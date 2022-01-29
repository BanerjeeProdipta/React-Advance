import { useContext } from "react";
import { IMovie, MovieContext } from "../../contexts/MoviesContext";

const Movies = () => {
  const movies = useContext(MovieContext);

  return (
    <div>
      {movies &&
        movies.map((movie: IMovie) => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <p>{movie.price}</p>
          </div>
        ))}
    </div>
  );
};

export default Movies;
