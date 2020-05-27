import { ROLES } from "../../constants/Constants";
import axios from 'axios';
import { HttpService } from '../../services/HttpService';
import ReduxThunk from 'redux-thunk';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN"; 
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN"; 

export const setAccessToken = (accessToken) => {
  return (dispatch) => {
    dispatch({ type: SET_ACCESS_TOKEN, accessToken })
  }
}
export const setRefreshToken = (refreshToken) => {
  return (dispatch) => {
    dispatch({ type: SET_REFRESH_TOKEN, refreshToken })
  }
}


export const login = (login, password) => {
  return (dispatch) => {
    axios
      .post('http://127.0.0.1:8000/token/obtain/', {username: login, password: password})
      .then(res => {
        if (res.data) {
          console.log(res.data.access)
          setAccessToken(res.data.access);
          setRefreshToken(res.data.refresh);
          axios.defaults.headers.common['Authorization'] = `JWT ${res.data.access}`;
        }
      })
      .then(() => {
        axios
        .get('http://127.0.0.1:8000/current_user/')
        .then(res => {
          console.log(res)
          const userData = {
            name: "Jan",
            surname: "Kowalski",
            role: res.data ? res.data.role : ''
          };
    
          dispatch({
            type: LOGIN,
            userData: userData,
          });
        })
      })
  }
  
  
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
