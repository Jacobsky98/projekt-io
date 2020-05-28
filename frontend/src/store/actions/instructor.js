import {AxiosInstance as axios} from "axios";

const GET_COURSES = "GET_COURSES";

const getCourses = () => {
  return (dispatch) => {
    return axios.get()
        .then((courses) => dispatch({
          type: GET_COURSES,
          courses,
        }))
  };
};

export { GET_COURSES, getCourses };
