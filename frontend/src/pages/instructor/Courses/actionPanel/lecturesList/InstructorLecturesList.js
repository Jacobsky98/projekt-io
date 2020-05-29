import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  getCourses,
  setSelectedCourse,
} from '../../../../../store/actions/instructor';
import './InstructorLecturesList.scss';

const InstructorLecturesList = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    courses: state.instructor.courses,
    selectedCourse: state.instructor.selectedCourse,
    selectedLecture: state.instructor.selectedLecture,
  });

  let { courses, selectedCourse, selectedLecture } = useSelector(mapState);

  return (
    <div className="instructor-lectures-list">
      <span>Zajęcia:</span>
      <List>
        {courses.length &&
          courses[selectedCourse].lectures.map((lecture, index) => (
            <ListItem
              button
              key={index}
              onClick={() => dispatch(setSelectedCourse(index))}
            >
              <ListItemText primary={lecture.name} secondary={lecture.value} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export { InstructorLecturesList };
