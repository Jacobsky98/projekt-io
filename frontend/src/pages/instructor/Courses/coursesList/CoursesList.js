import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getCourses } from '../../../../store/actions/instructor';
import './CoursesList.scss';

const mockedCourses = [];
for (let i = 0 ; i < 10 ; i++ ){
  mockedCourses.push({name: `kurs ${i}`});
}

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
    <div className='list'>
      <List>
        {mockedCourses.map((course, index) => (
          <ListItem>
            <ListItemText
              primary={'tutaj trzeba wrzucić coś w stylu {course.name}'}
              secondary={'ale nie wiem co z backendu przyjdzie xd'}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export { CoursesList };
