import axios from 'axios';
import { endpoint } from '../../constants/endpoints';

const GET_COURSES = 'GET_COURSES';

const getCourses = () => {
  return (dispatch) => {
    return axios
      .get(endpoint.courses)
      .then(({ data: { courses = [] } = { courses: [] } }) =>
        dispatch({
          type: GET_COURSES,
          courses,
        })
      );
  };
};

export { GET_COURSES, getCourses };
