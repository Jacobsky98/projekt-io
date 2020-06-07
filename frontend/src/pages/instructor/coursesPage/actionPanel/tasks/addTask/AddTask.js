import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './AddTask.scss';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { putTask } from '../../../../../../store/actions/instructor';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

export const AddTask = ({ onCancel, course }) => {
  const dispatch = useDispatch();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [description, setDescription] = useState('');

  const onAdd = () => {
    const task = {
      id_course: course.id,
      deadline: moment(selectedDate).format(),
      description,
    };

    dispatch(putTask(task));
    onCancel();
  };

  return (
    <div className="instructor-add-task">
      <span>Dodaj Zadanie</span>
      <div className="instructor-add-task__form">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
              label="Deadline"
              disableToolbar
              variant="inline"
              format="dd-MM-yyyy"
              margin="normal"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />

          <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              ampm={false}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          label="Treść"
          multiline
          rows={14}
          rowsMax={14}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="instructor-add-task__buttons">
        <Button variant="contained" color="primary" onClick={onAdd}>
          Dodaj
        </Button>
        <Button variant="contained" color="secondary" onClick={onCancel}>
          Anuluj
        </Button>
      </div>
    </div>
  );
};
