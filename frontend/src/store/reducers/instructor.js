import { GET_COURSES, SET_SELECTED_COURSE } from '../actions/instructor';

const initalState = {
  courses: [],
  selectedCourse: 0,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.courses,
      };
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.selectedCourse,
      };
    default:
      return state;
  }
};
