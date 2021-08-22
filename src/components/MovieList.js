import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { Container, Grid } from '@material-ui/core';
import MoviesContext from '../contexts/MoviesContext';
import { useContext } from 'react';

const MyContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 16px;
`;

const MovieList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <MyContainer>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Grid>
    </MyContainer>
  );
};

export default MovieList;
