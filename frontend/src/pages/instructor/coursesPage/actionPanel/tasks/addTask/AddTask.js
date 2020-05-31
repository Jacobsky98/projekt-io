import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './AddTask.scss';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { putTask } from '../../../../../../store/actions/instructor';

export const AddTask = ({ onCancel, course }) => {
  const dispatch = useDispatch();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [description, setDescription] = useState('');

  const onAdd = () => {
    const task = {
      id_course: course.id,
      deadline: selectedDate,
      description,
    };

    dispatch(putTask(task));
    onCancel();
  };

  return (
    <div className="instructor-add-task">
      <span>Dodaj Ogłoszenie</span>
      <div className="instructor-add-task__form">
        <TextField
          label="Deadline"
          type="datetime-local"
          defaultValue="2020-05-30T10:30"
          onChange={(event) => {
            handleDateChange(event.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
