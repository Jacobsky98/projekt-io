import { SET_SHOW_USER_FORM } from "../actions/admin";

const initalState = {
  showUserForm: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_SHOW_USER_FORM:
      return {
        ...state,
        showUserForm: action.showUserForm,
      };
    default:
      return state;
  }
};
