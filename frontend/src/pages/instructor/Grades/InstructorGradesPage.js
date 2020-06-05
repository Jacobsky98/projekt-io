import React, { useState, useEffect } from 'react';
import './InstructorGradesPage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const InstructorGradesPage = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
    grades: state.instructor.grades,
    tasks: state.instructor.tasks,
  });

  const { selectedCourse, selectedStudent, students, grades, tasks } = useSelector(mapState);

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
                tasks.filter((task) => task.id_course === selectedCourse.id).map((task, index) => {
                  const grade = grades.find((grade) => {
                    return task.id === grade.id_task;
                  });

                  return(
                    <div key={index} className="listItem">
                      <span className="listItem__header">{`Zadanie ${task.id}`}</span>
                      {
                        grade ?
                          <span className="listItem__header">{`Ocena: ${grade.grade}`}</span>
                          :
                          <span className="listItem__header">{`Status: Nie oceniono`}</span>
                      }
                      <div className="listItem__buttons">
                        <Button>Pobierz rozwiązanie</Button>
                        { !grade && (
                          <div>
                            <FormControl>
                              <Select
                                value={5}
                                onChange={() => {}}
                              >
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                              </Select>
                            </FormControl>
                            <Button>Oceń</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                  })
              }
            </List>
          </div>
          : <div className="InstructorGradesPage__noSelectedStudent"><span className="InstructorGradesPage__noSelectedStudent-text">Nie wybrałeś żadnego studenta</span></div>
      }

    </div>
  );
};
