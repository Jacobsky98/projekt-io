import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import axios from 'axios';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  getPresence,
  setSelectedClass,
} from '../../store/actions/instructor';
import './ClassesList.scss';
import { AddClass } from '../AddClass/AddClass';

export const ClassesList = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
    classes: state.instructor.classes,
    selectedClass: state.instructor.selectedClass,
  });

  const { selectedCourse, classes, selectedClass } = useSelector(mapState);

  return (
    <div className="ClassesList">
      <div className="ClassesList__header">
        <span>Lista zajęć {selectedCourse && selectedCourse.name}</span>
      </div>

      <div className="ClassesList__list">
        { classes.length ?
          (<List>
            {
              classes.map((oneClass, index) => (
                <ListItem
                  className={
                    (selectedClass && selectedClass.id_user) === oneClass
                      ? 'ClassesList-selected'
                      : ''
                  }
                  button
                  key={index}
                  onClick={() => {
                    dispatch(setSelectedClass(oneClass));
                    dispatch(getPresence(oneClass.id));
                  }}
                >
                  <ListItemText
                    primary={`Zajęcia ${index + 1}`}
                    secondary={`Data: ${oneClass.date}`}
                  />
                </ListItem>
              ))}
          </List>)
          : (<div className="ClassesList__noClasses">Brak dostępnych zajęć</div>)
        }
      </div>

      <div className="ClassesList__addClass">
        <AddClass />
      </div>
    </div>
  );
};
