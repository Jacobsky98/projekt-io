import React, { useState, useEffect } from 'react';
import './InstructorGradesPage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import List from '@material-ui/core/List';

export const InstructorGradesPage = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
  });

  const { selectedCourse, selectedStudent, students } = useSelector(mapState);

  return (
    <div className="InstructorGradesPage">
      <CoursesList/>
      <StudentsList/>
      {
        selectedStudent ?
          <div className="InstructorGradesPage__actionPanel">
            <span className="header">{selectedStudent.user_first_name}</span>
            <span>Średnia ocen: ujebałeś</span>
            <List>

            </List>
          </div>
          : <div className="InstructorGradesPage__noSelectedStudent">Nie wybrałeś żadnego studenta</div>
      }

    </div>
  );
};
