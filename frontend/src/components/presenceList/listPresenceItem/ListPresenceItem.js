import React, { useState } from 'react';
import axios from 'axios';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { endpoint } from '../../../constants/endpoints';
import { useDispatch } from 'react-redux';
import { getPresence } from '../../../store/actions/instructor';

export const ListPresenceItem = ({student, courseId}) => {
  const dispatch = useDispatch();

  const onPresenceChange = () => {
    const presence = {
      id_student: student.id_student,
      id_classes: student.id_classes,
      was_present: !student.was_present
    };

    axios.put(endpoint.presenceForStudent(student.id_classes, student.id_student), presence)
      .then(() => {
        dispatch(getPresence(student.id_classes));
      });
  };

  return (
    <ListItem button selected={student.was_present} onClick={onPresenceChange}>
      <ListItemIcon>
        {(student.was_present ? <DoneIcon /> : <CloseIcon />)}
      </ListItemIcon>
      <ListItemText primary={`${student.student_first_name} ${student.student_last_name}`} secondary={`${student.was_present ? 'Obecny' : 'Nieobecny'}`}/>
    </ListItem>
  )
};
