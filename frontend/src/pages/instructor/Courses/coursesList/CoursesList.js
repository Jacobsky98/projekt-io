import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  getCourses,
  setSelectedCourse,
} from '../../../../store/actions/instructor';
import './CoursesList.scss';

const CoursesList = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    courses: state.instructor.courses,
    selected: state.instructor.selected,
  });

  let { courses, selected } = useSelector(mapState);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div className="instructor-courses-list">
      <span>List przedmiotów</span>
      <List>
        {courses.map((course, index) => (
          <ListItem
            button
            key={index}
            onClick={() => dispatch(setSelectedCourse(index))}
          >
            <ListItemText
              primary={'tutaj trzeba wrzucić coś w stylu {course.name}'}
              secondary={'ale nie wiem co z backendu przyjdzie'}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export { CoursesList };
