import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import {
  getTasks,
  setSelectedTask,
} from '../../../../../store/actions/instructor';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import './InstructorTasks.scss';
import { AddTask } from './addTask/AddTask';

export const InstructorTasks = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const mapState = (state) => ({
    tasks: state.instructor.tasks,
    selectedTask: state.instructor.selectedTask,
    selectedCourse: state.instructor.selectedCourse,
  });

  let { tasks, selectedTask, selectedCourse } = useSelector(mapState);

  useEffect(() => {
    dispatch(getTasks(selectedCourse.id));
  }, []);

  return (
    <div className="instructor-tasks">
      <div className="instructor-tasks__list">
        <span className="instructor-tasks__list-header">Lista Zadań</span>
        <div className="instructor-tasks__list-content">
          <List>
            {selectedCourse &&
              tasks
                .filter((task) => task.id_course === selectedCourse.id)
                .map((task, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => {
                      dispatch(setSelectedTask(task));
                    }}
                  >
                    <ListItemText
                      primary={`Zadanie ${index}`}
                      secondary={`Deadline: ${task.deadline}`}
                    />
                  </ListItem>
                ))}
          </List>
        </div>
        <div className="instructor-tasks__list-add">
          <Button color="primary" onClick={() => setOpenDialog(true)}>
            Dodaj Zadanie
          </Button>
        </div>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          {selectedCourse ? (
            <AddTask
              onCancel={() => setOpenDialog(false)}
              course={selectedCourse}
            />
          ) : (
            'Nie wybrano żadnego przedmiotu'
          )}
        </Dialog>
      </div>
      <div className="instructor-tasks__info">
        <span className="instructor-tasks__info-header">Opis zadania</span>
        <p>{selectedTask && selectedTask.description}</p>
      </div>
    </div>
  );
};
