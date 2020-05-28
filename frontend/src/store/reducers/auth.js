import {
  GET_USER_DATA,
  LOGIN,
  LOGOUT,
  SET_TOKENS,
} from "../actions/auth";

const initalState = {
  accessToken: null,
  refreshToken: null,
  userData: null,
  isLogged: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };

    case LOGOUT:
      return {
        ...initalState,
        isLogged: false,
      };

    case SET_TOKENS:
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };

    case GET_USER_DATA:
      return {
        ...state,
        userData: {
          ...action.userData,
        },
      };

    default:
      return state;
  }
};
