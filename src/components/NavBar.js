import React from 'react';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export default function NavBar() {
  const classes = useStyles();
  const { user, login, logout } = useContext(UserContext);

  const toggleLoginLogout = !user ? login : logout;

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <Typography component='h1' variant='h5' className={classes.title}>
              {user ? `Hola ${user.name}` : 'Bienvenid@'}
            </Typography>
            <Button
              color='inherit'
              variant='outlined'
              onClick={toggleLoginLogout}
            >
              {!user ? 'Iniciar sesion' : 'Cerrar sesion'}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}
