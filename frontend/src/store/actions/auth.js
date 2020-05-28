import { ROLES } from "../../constants/Constants";
import axios from "axios";
import ReduxThunk from "redux-thunk";
import { authEndpoint, usersEndpoint } from "../../constants/endpoints";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_TOKENS = "SET_TOKENS";
export const GET_USER_DATA = "GET_USER_DATA";

export const setTokens = (accessToken, refreshToken) => {
  return {
    type: SET_TOKENS,
    accessToken,
    refreshToken,
  };
};

export const getUserData = () => {
  return (dispatch) => {
    return axios.get(usersEndpoint.currentUser).then(({ data }) => {
      // jeżeli nie mamy użytkownika z żadną rolą, to najlepiej zmienić tu na 'role: ROLES.ADMIN,'
      // zalogować się, dodać użytkowników z odpowiednimi rolami i zmienic spowrotem
      const userData = {
        name: "Jan",
        surname: "Kowalski",
        role: data ? data.role : null,
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
      .post(authEndpoint.authorize, { username, password })
      .then(({ data }) => {
        axios.defaults.headers.common["Authorization"] = `JWT ${data.access}`;
        console.log(JSON.stringify(data.access, null, 2));

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
