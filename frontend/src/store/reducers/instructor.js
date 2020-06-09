import {
  GET_ANNOUNCEMENTS,
  GET_COURSES,
  GET_GRADES,
  GET_STUDENTS,
  GET_TASKS,
  GET_COURSE_FILES,
  PUT_ANNOUNCEMENT,
  PUT_TASK,
  SET_SELECTED_ANNOUNCEMENTS,
  SET_SELECTED_COURSE,
  SET_SELECTED_STUDENT,
  SET_SELECTED_TASK, GET_CLASSES, SET_SELECTED_CLASS, GET_PRESENCE,
} from '../actions/instructor';

const initalState = {
  courses: [],
  tasks: [],
  announcements: [],
  students: [],
  grades: [],
  courseFiles: [],
  classes: [],
  presence: [],
  selectedCourse: undefined,
  selectedTask: undefined,
  selectedAnnouncement: undefined,
  selectedStudent: undefined,
  selectedClass: undefined,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.courses,
      };

    case GET_COURSE_FILES:
      return {
        ...state,
        courseFiles: action.courseFiles,
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
        grades: [],
        announcements: [],
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
        selectedStudent: action.selectedStudent,
      };

    case GET_STUDENTS:
      return {
        ...state,
        students: action.students,
      };

    case GET_GRADES:
      return {
        ...state,
        grades: action.grades,
      };

    case GET_CLASSES:
      return {
        ...state,
        classes: action.classes,
      };

    case SET_SELECTED_CLASS:
      return {
        ...state,
        selectedClass: action.selectedClass,
      };

    case GET_PRESENCE:
      return {
        ...state,
        presence: action.presence,
      };

    default:
      return state;
  }
};
