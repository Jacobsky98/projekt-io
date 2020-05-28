import {GET_COURSES} from "../actions/instructor";

const initalState = {
  courses: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.courses,
      };
    default:
      return state;
  }
};
