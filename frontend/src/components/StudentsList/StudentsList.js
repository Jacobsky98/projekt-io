import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { setSelectedStudent } from '../../store/actions/instructor';
import './StudentsList.scss';

export const StudentsList = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    selectedStudent: state.instructor.selectedStudent,
    students: state.instructor.students,
  });

  const { selectedCourse, selectedStudent, students } = useSelector(mapState);

  return (
    <div className="StudentsList">
      <span className="StudentsList__header">Lista studentów</span>
      <List>
        {
          selectedCourse && students
            .filter((student) => student.id_course === selectedCourse.id)
            .map((student, index) => (
              <ListItem
                button
                key={index}
                onClick={() => dispatch(setSelectedStudent(student))}
              >
                <ListItemText primary={`${student.user_first_name} ${student.user_last_name}`} secondary={`Mail: ${student.user_email}`}/>
              </ListItem>
            ))
        }
      </List>
    </div>
  )
};
