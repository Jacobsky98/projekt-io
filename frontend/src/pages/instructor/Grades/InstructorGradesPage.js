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
import { AddGrade } from '../../../components/addGrade/AddGrade';

export const InstructorGradesPage = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
    grades: state.instructor.grades,
    tasks: state.instructor.tasks,
  });

  const {
    selectedCourse,
    selectedStudent,
    students,
    grades,
    tasks,
  } = useSelector(mapState);

  const getAvarageGrade = () => {
    let sum = 0;
    for (const grade of grades) {
      sum += grade.grade;
    }
    return (sum / grades.length).toFixed(2);
  };

  const fixedTasks = tasks.map((task) => {
    const grade = grades.find((grade) => {
      return task.id === grade.id_task;
    });

    return {
      ...task,
      grade,
    };
  });

  return (
    <div className="InstructorGradesPage">
      <div className="InstructorGradesPage__coursesList">
        <CoursesList />
      </div>
      <div className="InstructorGradesPage__studentsList">
        <StudentsList />
      </div>
      {selectedStudent ? (
        <div className="InstructorGradesPage__actionPanel">
          <span className="header">{selectedStudent.user_first_name}</span>
          <span>Średnia ocen: {getAvarageGrade()}</span>
          <div className="list">
            <List>
              {(selectedCourse || selectedStudent) &&
                fixedTasks.map((task, index) => {
                  return (
                    <div
                      key={index}
                      className={`listItem ${
                        task.grade ? 'listItem-active' : ''
                      }`}
                    >
                      <span className="listItem__header">{`Zadanie ${task.id}`}</span>
                      {task.grade ? (
                        <span className="listItem__header">{`Ocena: ${task.grade.grade}`}</span>
                      ) : (
                        <span className="listItem__header">{`Status: Nie oceniono`}</span>
                      )}
                      <div className="listItem__buttons">
                        <Button>Pobierz rozwiązanie</Button>
                        {!task.grade && (
                          <AddGrade
                            studentId={selectedStudent.id_user}
                            courseId={selectedCourse.id}
                            taskId={task.id}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </List>
          </div>
        </div>
      ) : (
        <div className="InstructorGradesPage__noSelectedStudent">
          <span className="InstructorGradesPage__noSelectedStudent-text">
            Nie wybrałeś żadnego studenta
          </span>
        </div>
      )}
    </div>
  );
};
