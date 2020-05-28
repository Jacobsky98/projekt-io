import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getCourses } from '../../../../store/actions/instructor';

const CoursesList = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    courses: state.instructor.courses,
  });

  let { courses } = useSelector(mapState);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <List>
      {courses.map((course, index) => (
        <ListItem>
          <ListItemText
            primary={'tutaj trzeba wrzucić coś w stylu {course.name}'}
            secondary={'ale nie wiem co z backendu przyjdzie xd'}
          />
        </ListItem>
      ))}
    </List>
  );
};

export { CoursesList };
