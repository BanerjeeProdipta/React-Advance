import { createContext, useState } from "react";

export interface IMovie {
  id: number;
  name: string;
  price: number;
}

const movieList: IMovie[] = [
  {
    id: 1,
    name: "Shrek 1",
    price: 5,
  },
  {
    id: 2,
    name: "How to train your dragon",
    price: 5,
  },
  {
    id: 3,
    name: "Croods",
    price: 5,
  },
];

export const MovieContext = createContext<IMovie[] | null>(null);

const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies] = useState<IMovie[]>(movieList);

  return <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>;
};

export default MovieProvider;
