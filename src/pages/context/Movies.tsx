import { useContext } from "react";
import { IMovie, MovieContext } from "../../components/contexts/MoviesContext";

const Movies = () => {
  const moviesList = useContext(MovieContext);

  return (
    <div>
      <div>
        <p className="italic text-xs max-w-sm text-gray-500">
          The difference is in the way context is consumed. To use data passed from a parent
          component via context, you use context.Consumer component in ES6 classes. A function is
          passed as a child of context.Consumer. The function takes context as an argument and
          returns JSX which renders the data passed via context.
        </p>
      </div>
      <div className="space-y-8 mt-4">
        <div>
          <h2>FROM useContext-</h2>

          <div>
            {moviesList &&
              moviesList.map((movie: IMovie) => (
                <div key={movie.id}>
                  <h5>{movie.name}</h5>
                  <p>{movie.price}</p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h2>FROM CONSUMER-</h2>
          <div>
            <MovieContext.Consumer>
              {(movies) => {
                if (movies && movies.length > 0)
                  return movies.map((movie: IMovie) => (
                    <div key={movie.id}>
                      <h5>{movie.name}</h5>
                      <p>{movie.price}</p>
                    </div>
                  ));
              }}
            </MovieContext.Consumer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
