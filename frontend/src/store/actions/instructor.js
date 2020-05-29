import axios from 'axios';
import { endpoint } from '../../constants/endpoints';

export const GET_COURSES = 'GET_COURSES';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const SET_SELECTED_LECTURE = 'SET_SELECTED_LECTURE';

const mockedCourses = [];
for (let i = 0; i < 10; i++) {
  mockedCourses.push({
    name: `kurs ${i}`,
    lectures: [
      { name: 'first', value: Math.random() },
      { name: 'second', value: Math.random() },
      { name: 'third', value: Math.random() },
    ],
  });
}

export const setSelectedCourse = (selectedCourse) => {
  return {
    type: SET_SELECTED_COURSE,
    selectedCourse,
  };
};

export const getCourses = () => {
  return (dispatch) => {
    return axios
      .get(endpoint.courses)
      .then(({ data: { courses = [] } = { courses: [] } }) =>
        dispatch({
          type: GET_COURSES,
          // TODO: when endpoint will be ready
          courses: mockedCourses,
        })
      );
  };
};
