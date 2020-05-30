import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InstructorCoursesActionPanel.scss';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Announcements } from './announcements/Announcements';

export const InstructorCoursesActionPanel = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const mapState = (state) => ({
    courses: state.instructor.courses,
    selectedCourse: state.instructor.selectedCourse,
  });

  let { courses, selectedCourse } = useSelector(mapState);

  return (
    <div className="action-panel">
      <span className="action-panel__header">{selectedCourse.info}</span>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Zadania" />
        <BottomNavigationAction label="Ogłoszenia" />
      </BottomNavigation>
      {value ? <Announcements /> : null}
    </div>
  );
};
