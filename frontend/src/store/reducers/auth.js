import { LOGIN, LOGOUT } from '../actions/auth';

const initalState = {
    token: null,
    userData: null
}

export default (state = initalState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                token: action.token,
                userData: {
                    ...action.userData
                }
            };

        case LOGOUT:
            return initalState;

        default:
            return state;
    }
}