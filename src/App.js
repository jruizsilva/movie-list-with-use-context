import React from 'react';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import { UserProvider } from './contexts/UserContext';
import { MoviesProvider } from './contexts/MoviesContext';

const App = () => {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <MoviesProvider>
          <NavBar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </>
  );
};

export default App;
