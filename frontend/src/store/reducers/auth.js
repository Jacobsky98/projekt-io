import { LOGIN, LOGOUT, SET_ACCESS_TOKEN, SET_REFRESH_TOKEN } from '../actions/auth';

const initalState = {
    accessToken: null,
    refreshToken: null,
    userData: null,
    isLogged: false,
};

export default (state = initalState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLogged: true,
                userData: {
                    ...action.userData
                }
            };

        case LOGOUT:
            return {
                ...initalState,
                isLogged: false,
            };

        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken
            };
        case SET_REFRESH_TOKEN:
            return {
                ...state,
                refreshToken: action.refreshToken
            };

        default:
            return state;
    }
}
