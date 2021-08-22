import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { initialUser } from '../const/initialUser';

const UserContext = createContext();
const localUser = JSON.parse(localStorage.getItem('initialUser')) || null;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localUser);

  const login = () =>
    setUser(JSON.parse(localStorage.getItem('initialUser')) || initialUser);
  const logout = () => setUser(null);

  const toggleFavoriteMovie = (movieId) => {
    const favoriteMovies = user?.favoriteMovies?.includes(movieId)
      ? // Remove favorite
        user.favoriteMovies.filter((currIdMovie) => currIdMovie !== movieId)
      : // Add favorite
        [...user.favoriteMovies, movieId];

    setUser({ ...user, favoriteMovies });
  };

  useEffect(() => {
    user && localStorage.setItem('initialUser', JSON.stringify(user));
  }, [user]);

  const data = { user, login, logout, toggleFavoriteMovie };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
