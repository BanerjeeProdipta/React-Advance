import { useContext } from "react";
import { IMovie, MovieContext } from "../../components/contexts/MoviesContext";

const Movies = () => {
  const moviesList = useContext(MovieContext);

  return (
    <div className="space-y-8 mt-4">
      <div>
        <h2>FROM useContext</h2>

        <div>
          {moviesList &&
            moviesList.map((movie: IMovie) => (
              <div key={movie.id}>
                <h3>{movie.name}</h3>
                <p>{movie.price}</p>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2>FROM CONSUMER</h2>
        <div>
          <MovieContext.Consumer>
            {(movies) => {
              if (movies && movies.length > 0)
                return movies.map((movie: IMovie) => (
                  <div key={movie.id}>
                    <h3>{movie.name}</h3>
                    <p>{movie.price}</p>
                  </div>
                ));
            }}
          </MovieContext.Consumer>
        </div>
      </div>
    </div>
  );
};

export default Movies;
