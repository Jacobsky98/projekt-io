import React, { useState, useEffect } from 'react';
import './InstructorGradesPage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsList } from '../../../components/StudentsList/StudentsList';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { AddGrade } from '../../../components/addGrade/AddGrade';
import axios from 'axios';
import { endpoint } from '../../../constants/endpoints';
import fileDownload from 'js-file-download';

export const InstructorGradesPage = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
    grades: state.instructor.grades,
    tasks: state.instructor.tasks,
    courseFiles: state.instructor.courseFiles,
  });

  const {
    selectedCourse,
    selectedStudent,
    students,
    grades,
    tasks,
    courseFiles,
  } = useSelector(mapState);

  const getAvarageGrade = () => {
    let sum = 0;
    for (const grade of grades) {
      sum += grade.grade;
    }
    return (sum / grades.length).toFixed(2);
  };

  const fixedTasks = tasks
    .filter((task) => task.id_course === (selectedCourse && selectedCourse.id))
    .map((task) => {
      let grade = null;
      if (grades) {
        grade = grades.find((grade) => {
          return task.id === grade.id_task;
        });
      }

      return {
        ...task,
        grade,
      };
    });

  const downloadFile = async (task, selectedStudent) => {
    const selectedStudentId = selectedStudent && selectedStudent.id_user;
    const taskId = task && task.id;
    const userTaskSolutions = courseFiles.filter(
      (f) => f.id_user === selectedStudentId && f.id_task === taskId
    );
    for (let i = 0; i < userTaskSolutions.length; ++i) {
      const file = await axios.get(
        endpoint.getFile(userTaskSolutions[i].if_file),
        { responseType: 'blob' }
      );
      const disposition = file.headers['content-disposition'];
      let filename = null;

      // tricky way to get filename from header
      if (disposition && disposition.indexOf('attachment') !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, '');
        }
      }
      fileDownload(file.data, filename);
    }
  };

  const hasStudentSentSolution = (selectedStudent, task) => {
    if (selectedStudent && selectedStudent.id_user && task && task.id) {
      return courseFiles.find(
        (f) => f.id_user === selectedStudent.id_user && f.id_task === task.id
      );
    }
    return false;
  };

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
                        {hasStudentSentSolution(selectedStudent, task) ? (
                          <Button
                            onClick={() => downloadFile(task, selectedStudent)}
                          >
                            Pobierz rozwiązanie
                          </Button>
                        ) : (
                          <div>Student nie dodał zadania!</div>
                        )}

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
