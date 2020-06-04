import React, { useState, useEffect } from 'react';
import './InstructorGradesPage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { useDispatch, useSelector } from 'react-redux';

export const InstructorGradesPage = () => {  
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
  });
  const { selectedCourse } = useSelector(mapState);
  return (
    <div className="InstructorGradesPage">
      <CoursesList />
    </div>
  );
};
