import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  getCourses,
  setSelectedCourse,
} from '../../store/actions/instructor';
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

  return (
    <div className="instructor-courses-list">
      <span className="instructor-courses-list__header">List przedmiotów</span>
      <List>
        {courses
          .filter((course) => course.id_teacher === userData.id)
          .map((course, index) => (
            <ListItem
              button
              key={index}
              onClick={() => dispatch(setSelectedCourse(course))}
            >
              <ListItemText
                primary={course.name}
                secondary={`Prowadzący: ${userData.name} ${userData.surname}`}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export { CoursesList };
