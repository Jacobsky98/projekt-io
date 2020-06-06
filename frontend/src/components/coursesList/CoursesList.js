import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getCourses, setSelectedCourse, getCourseFiles } from '../../store/actions/instructor';
import './CoursesList.scss';

const CoursesList = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    courses: state.instructor.courses,
    selectedCourse: state.instructor.selected,
    userData: state.auth.userData,
  });

  let { userData, courses, selectedCourse } = useSelector(mapState);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  const changeCourse = (course) => {
    dispatch(setSelectedCourse(course));
    dispatch(getCourseFiles(course));
  }
  
  return (
    <div className="instructor-courses-list">
      <span className="instructor-courses-list__header">Lista przedmiotów</span>
      <List>
        {courses
          .filter((course) => course.id_teacher === userData.id)
          .map((course, index) => {
            return (
              <ListItem
                className={
                  (selectedCourse && selectedCourse.id) === course.id
                    ? 'instructor-courses-list__selected'
                    : 'cokkolwiek'
                }
                button
                key={index}
                onClick={() => changeCourse(course)}
              >
                <ListItemText
                  primary={course.name}
                  secondary={`Prowadzący: ${userData.name} ${userData.surname}`}
                />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export { CoursesList };
