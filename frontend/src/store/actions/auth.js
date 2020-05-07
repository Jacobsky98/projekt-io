import { ROLES } from '../../constants/Constants';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (login, password) => {
    return async dispatch => {
        const token = 'ABC';
        const userData = {
            name: 'Jan',
            surname: 'Kowalski',
            role: ROLES.STUDENT
        }

        dispatch({
            type: LOGIN,
            token: token,
            userData: userData
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}