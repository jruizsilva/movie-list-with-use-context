import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';

const MyCard = styled(Card)`
  ${spacing}
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
    objectFit: 'cover',
  },
}));

function Movie({ movie }) {
  const classes = useStyles();

  const { user, toggleFavoriteMovie } = useContext(UserContext);

  const isFavorite = user?.favoriteMovies.includes(movie.id);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <MyCard className={classes.root} mx='auto' raised>
        <CardMedia
          className={classes.media}
          image={movie.imageUrl}
          title={movie.title}
        />
        <CardContent style={{ paddingBottom: 0 }}>
          <Typography variant='h5' component='h2' noWrap>
            {movie.title}
          </Typography>
        </CardContent>
        <CardActions style={{ paddingLeft: 16, paddingBottom: 16 }}>
          {user && (
            <Button
              variant={`${isFavorite ? 'contained' : 'outlined'}`}
              color='primary'
              onClick={() => toggleFavoriteMovie(movie.id)}
            >
              Favorito
            </Button>
          )}
        </CardActions>
      </MyCard>
    </Grid>
  );
}
export default Movie;
