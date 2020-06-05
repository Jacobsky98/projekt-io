import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Input,
  InputLabel,
  Grid,
  Button,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as authActions from '../../../store/actions/auth';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  titleText: {
    fontFamily: 'Roboto',
    fontSize: '50px',
  },
  linkText: {
    fontFamily: 'Roboto',
    color: '#1976D2',
  },
  input: {
    width: '300px',
    marginTop: '15px',
  },
  button: {
    width: '300px',
    marginTop: '15px',
  },
  link: {
    display: 'block',
    color: '#3f51b5',
    fontFamily: 'Roboto',
    textDecoration: 'none',
    marginTop: '15px',
  },
  progress: {
    marginTop: '20px',
  },
}));

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const handleLogin = async () => {
    if (login.length > 0 && password.length > 0) {
      setIsLoading(true);
      await dispatch(authActions.login(login, password));
      setIsLoading(false);
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid container justify="center">
        <h1 className={classes.titleText}>DZIENNIK ELEKTRONICZNY</h1>
      </Grid>
      <Grid container justify="center">
        <FormControl>
          <InputLabel htmlFor="login">Login</InputLabel>
          <Input
            onChange={(evt) => setLogin(evt.target.value)}
            className={classes.input}
            id="login"
          />
        </FormControl>
      </Grid>
      <Grid container justify="center">
        <FormControl>
          <InputLabel htmlFor="password">Hasło</InputLabel>
          <Input
            type="password"
            onChange={(evt) => setPassword(evt.target.value)}
            className={classes.input}
            id="password"
          />
        </FormControl>
      </Grid>
      <Grid container justify="center">
        {isLoading ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <Button
            onClick={handleLogin}
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
          >
            Zaloguj
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginPage;
