import { ROLES } from '../../constants/Constants';
import axios from 'axios';
import { endpoint } from '../../constants/endpoints';
import { setError } from './global';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKENS = 'SET_TOKENS';
export const GET_USER_DATA = 'GET_USER_DATA';

//komunikaty bledow mozna potem wyrzucic w jedno miejsce, zobaczymy jak to sie przyjmie
const LOGIN_ERROR = 'Wystąpił błąd poczas pobierania tokenu!';
const GET_USER_DATA_ERROR =
  'Wystąpił błąd podczas pobierania danych użytkownika!';

export const setTokens = (accessToken, refreshToken) => {
  return {
    type: SET_TOKENS,
    accessToken,
    refreshToken,
  };
};

export const getUserData = () => {
  return (dispatch) => {
    return axios
      .get(endpoint.currentUser)
      .then(({ data }) => {
        // jeżeli nie mamy użytkownika z żadną rolą, to najlepiej zmienić tu na 'role: ROLES.ADMIN,'
        // zalogować się, dodać użytkowników z odpowiednimi rolami i zmienic spowrotem
        console.log(data);
        const userData = {
          name: data ? data.first_name : null,
          surname: data ? data.last_name : null,
          role: data.role ? data.role : ROLES.STUDENT, // zeby nie wywalalo apki przy logowaniu
          id: data ? data.id : null,
        };

        dispatch({ type: GET_USER_DATA, userData });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch(setError(GET_USER_DATA_ERROR));
      });
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    return axios
      .post(endpoint.authorize, { username, password })
      .then(({ data }) => {
        localStorage.setItem('accessToken', data.access);
        console.log(data.access)
        axios.defaults.headers.common['Authorization'] = `JWT ${data.access}`;
        dispatch(setTokens(data.access, data.refresh));
        return dispatch(getUserData());
      })
      .then(() => {
        dispatch({ type: LOGIN });
      })
      .catch((error) => {
        dispatch(setError(LOGIN_ERROR));
      });
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
