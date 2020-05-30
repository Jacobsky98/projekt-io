import { ROLES } from '../../constants/Constants';
import axios from 'axios';
import { endpoint } from '../../constants/endpoints';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKENS = 'SET_TOKENS';
export const GET_USER_DATA = 'GET_USER_DATA';

export const setTokens = (accessToken, refreshToken) => {
  return {
    type: SET_TOKENS,
    accessToken,
    refreshToken,
  };
};

export const getUserData = () => {
  return (dispatch) => {
    return axios.get(endpoint.currentUser).then(({ data }) => {
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
    });
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    return axios
      .post(endpoint.authorize, { username, password })
      .then(({ data }) => {
        localStorage.setItem('accessToken', data.access);
        axios.defaults.headers.common['Authorization'] = `JWT ${data.access}`;
        dispatch(setTokens(data.access, data.refresh));
        return dispatch(getUserData());
      })
      .then(() => {
        dispatch({ type: LOGIN });
      });
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
