import React, { useState, useEffect } from 'react';
import './InstructorGradesPage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import List from '@material-ui/core/List';
import { getGrades, setSelectedStudent } from '../../../store/actions/instructor';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

export const InstructorGradesPage = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
    grades: state.instructor.grades,
  });

  const { selectedCourse, selectedStudent, students, grades } = useSelector(mapState);

  const getAvarageGrade = () => {
    let sum = 0;
    for (const grade of grades) {
      sum += grade.grade;
    }
    return (sum / grades.length).toFixed(2);
  };

  return (
    <div className="InstructorGradesPage">
      <div className="InstructorGradesPage__coursesList">
        <CoursesList/>
      </div>
      <div className="InstructorGradesPage__studentsList">
        <StudentsList/>
      </div>
      {
        selectedStudent ?
          <div className="InstructorGradesPage__actionPanel">
            <span className="header">{selectedStudent.user_first_name}</span>
            <span>Średnia ocen: {getAvarageGrade()}</span>
            <List>
              {
                (selectedCourse || selectedStudent) &&
                  grades.map((grade, index) => (
                    <ListItem
                      key={index}
                    >
                      <ListItemText primary={`Zadanie ${grade.id_task}`} secondary={`Ocena: ${grade.grade} Komentarz: ${grade.info}`}/>
                    </ListItem>
                  ))
              }
            </List>
          </div>
          : <div className="InstructorGradesPage__noSelectedStudent"><span className="InstructorGradesPage__noSelectedStudent-text">Nie wybrałeś żadnego studenta</span></div>
      }

    </div>
  );
};
