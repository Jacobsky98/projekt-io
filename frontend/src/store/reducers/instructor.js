import {
  GET_ANNOUNCEMENTS,
  GET_COURSES, GET_GRADES, GET_STUDENTS,
  GET_TASKS,
  PUT_ANNOUNCEMENT,
  PUT_TASK,
  SET_SELECTED_ANNOUNCEMENTS,
  SET_SELECTED_COURSE, SET_SELECTED_STUDENT,
  SET_SELECTED_TASK,
} from '../actions/instructor';

const initalState = {
  courses: [],
  tasks: [],
  announcements: [],
  students: [],
  grades: [],
  selectedCourse: undefined,
  selectedTask: undefined,
  selectedAnnouncement: undefined,
  selectedStudent: undefined,
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
        selectedStudent: undefined,
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

    case SET_SELECTED_STUDENT:
      return {
        ...state,
        selectedStudent: action.selectedStudent
      };

    case GET_STUDENTS:
      return {
        ...state,
        students: action.students
      };

    case GET_GRADES:
      return {
        ...state,
        grades: action.grades
      };

    default:
      return state;
  }
};
