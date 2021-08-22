import React, { createContext, useState } from 'react';
import { initialMovies } from '../const/initialMovies';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialMovies);

  const data = { movies };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export { MoviesProvider };
export default MoviesContext;
