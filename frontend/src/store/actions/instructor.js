import axios from 'axios';
import { endpoint } from '../../constants/endpoints';

export const GET_COURSES = 'GET_COURSES';
export const GET_TASKS = 'GET_TASKS';
export const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS';
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_GRADES = 'GET_GRADES';
export const GET_COURSE_FILES = 'GET_COURSE_FILES';
export const GET_CLASSES = 'GET_CLASSES';
export const GET_PRESENCE = 'GET_PRESENCE';

export const SET_SELECTED_CLASS = 'SET_SELECTED_CLASS';
export const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const SET_SELECTED_ANNOUNCEMENTS = 'SET_SELECTED_ANNOUNCEMENTS';
export const SET_SELECTED_TASK = 'SET_SELECTED_TASK';

export const PUT_ANNOUNCEMENT = 'PUT_ANNOUNCEMENT';
export const PUT_TASK = 'PUT_TASK';



export const putAnnouncement = (announcement) => {
  return (dispatch) => {
    return axios.post(endpoint.addAnnouncement, announcement).then(() => {
      dispatch({ type: PUT_ANNOUNCEMENT });
      return dispatch(getAnnouncements());
    });
  };
};

export const putTask = (task) => {
  return (dispatch) => {
    return axios.post(endpoint.addTask, task).then(() => {
      dispatch({ type: PUT_ANNOUNCEMENT });
      return dispatch(getTasks());
    });
  };
};

export const setSelectedStudent = (selectedStudent) => {
  return {
    type: SET_SELECTED_STUDENT,
    selectedStudent,
  };
};

export const setSelectedClass = (selectedClass) => {
  return {
    type: SET_SELECTED_CLASS,
    selectedClass,
  };
};

export const setSelectedTask = (selectedTask) => {
  return {
    type: SET_SELECTED_TASK,
    selectedTask,
  };
};

export const setSelectedAnnouncement = (selectedAnnouncement) => {
  return {
    type: SET_SELECTED_ANNOUNCEMENTS,
    selectedAnnouncement,
  };
};

export const setSelectedCourse = (selectedCourse) => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_COURSE,
      selectedCourse,
    });
    dispatch(getClasses(selectedCourse.id));
    dispatch(getTasks());
    return dispatch(getStudents(selectedCourse.id));
  };
};

export const getStudents = (courseId) => {
  return (dispatch) => {
    return axios.get(endpoint.studentsForCourse(courseId)).then(({ data }) => {
      dispatch({ type: GET_STUDENTS, students: data });
      return Promise.resolve();
    });
  };
};

export const getPresence = (classId) => {
  return (dispatch) => {
    return axios.get(endpoint.getPresenceForClass(classId)).then(({ data }) => {
      dispatch({ type: GET_PRESENCE, presence: data });
      return Promise.resolve();
    });
  };
};

export const getClasses = (courseId) => {
  return (dispatch) => {
    return axios.get(endpoint.classesForCourse(courseId)).then(({ data }) => {
      dispatch({ type: GET_CLASSES, classes: data });
      return Promise.resolve();
    });
  };
};

export const getGrades = (courseId, studentId) => {
  return (dispatch) => {
    return axios
      .get(endpoint.gradesForCourseAndStudent(courseId, studentId))
      .then(({ data }) => {
        dispatch({ type: GET_GRADES, grades: data });
        return Promise.resolve();
      });
  };
};

export const getCourses = () => {
  return (dispatch) => {
    return axios.get(endpoint.courses).then(({ data }) =>
      dispatch({
        type: GET_COURSES,
        courses: data,
      })
    );
  };
};

export const getCourseFiles = (course) => {
  return (dispatch) => {
    return axios
      .get(endpoint.getFilesFromCourseId + course.id + '/')
      .then(({ data }) =>
        dispatch({
          type: GET_COURSE_FILES,
          courseFiles: data,
        })
      );
  };
};

export const getTasks = () => {
  return (dispatch) => {
    return axios.get(endpoint.tasks).then(({ data }) =>
      dispatch({
        type: GET_TASKS,
        tasks: data,
      })
    );
  };
};

export const getAnnouncements = () => {
  return (dispatch) => {
    return axios.get(endpoint.announcements).then(({ data }) => {
      dispatch({
        type: GET_ANNOUNCEMENTS,
        announcements: data,
      });
      return Promise.resolve();
    });
  };
};
