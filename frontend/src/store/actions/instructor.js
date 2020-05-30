import axios from 'axios';
import { endpoint } from '../../constants/endpoints';

export const GET_COURSES = 'GET_COURSES';
export const GET_TASKS = 'GET_TASKS';
export const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const SET_SELECTED_ANNOUNCEMENTS = 'SET_SELECTED_ANNOUNCEMENTS';
export const SET_SELECTED_TASK = 'SET_SELECTED_TASK';
export const PUT_ANNOUNCEMENT = 'PUT_ANNOUNCEMENT';

export const putAnnouncement = (announcement) => {
  return (dispatch) => {
    return axios.post(endpoint.addAnnouncement, announcement).then(() => {
      dispatch({ type: PUT_ANNOUNCEMENT });
      return dispatch(getAnnouncements());
    });
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
  return {
    type: SET_SELECTED_COURSE,
    selectedCourse,
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
