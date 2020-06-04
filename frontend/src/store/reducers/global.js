import { SET_ERROR, CLEAR_ERROR } from '../actions/global';

const initalState = {
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: action.error,
      };

    case CLEAR_ERROR:
      return {
        error: null,
      };

    default:
      return state;
  }
};
