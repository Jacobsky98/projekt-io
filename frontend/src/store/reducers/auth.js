import { LOGIN, LOGOUT } from '../actions/auth';

const initalState = {
    token: null,
    userData: null,
    isLogged: false,
};

export default (state = initalState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLogged: true,
                token: action.token,
                userData: {
                    ...action.userData
                }
            };

        case LOGOUT:
            return {
                ...initalState,
                isLogged: false,
            };

        default:
            return state;
    }
}
