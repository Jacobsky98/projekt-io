import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';

export const StudentsList = () => {
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
  });
  const { selectedCourse, selectedStudent, students } = useSelector(mapState);

  return (
    <div>
      <List>
        {
          selectedCourse && students.filter((student) => student)
        }
      </List>
    </div>
  )
};
