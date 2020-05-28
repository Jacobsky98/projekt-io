import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InstructorCoursesActionPanel.scss';
import { InstructorLecturesList } from './lecturesList/InstructorLecturesList';
import { InstructorLecture } from './lecture/InstructorLecture';

export const InstructorCoursesActionPanel = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    courses: state.instructor.courses,
    selected: state.instructor.selectedCourse,
  });

  let { courses, selected } = useSelector(mapState);

  return (
    <div className="action-panel">
      <InstructorLecturesList />
      <InstructorLecture />
    </div>
  );
};
