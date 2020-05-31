import {
  GET_ANNOUNCEMENTS,
  GET_COURSES,
  GET_TASKS,
  PUT_ANNOUNCEMENT,
  PUT_TASK,
  SET_SELECTED_ANNOUNCEMENTS,
  SET_SELECTED_COURSE,
  SET_SELECTED_TASK,
} from '../actions/instructor';

const initalState = {
  courses: [],
  tasks: [],
  announcements: [],
  selectedCourse: undefined,
  selectedTask: undefined,
  selectedAnnouncement: undefined,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.courses,
      };

    case GET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };

    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.announcements,
      };

    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.selectedCourse,
        selectedAnnouncement: undefined,
        selectedTask: undefined,
      };

    case SET_SELECTED_ANNOUNCEMENTS:
      return {
        ...state,
        selectedAnnouncement: action.selectedAnnouncement,
      };

    case SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.selectedTask,
      };

    case PUT_ANNOUNCEMENT:
      return {
        ...state,
      };

    case PUT_TASK:
      return {
        ...state,
      };

    default:
      return state;
  }
};
