import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import './AddGrade.scss';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { endpoint } from '../../constants/endpoints';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getGrades } from '../../store/actions/instructor';

export const AddGrade = ({ studentId, taskId, courseId }) => {
  const dispatch = useDispatch();
  const [grade, setGrade] = useState(5);
  const [description, setDescription] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const addGrade = () => {
    const gradeToAdd = {
      id_student: studentId,
      id_task: taskId,
      id_course: courseId,
      grade,
      date: new Date(),
      info: description,
    };

    axios.post(endpoint.addGrade, gradeToAdd).then(() => {
      dispatch(getGrades(courseId, studentId));
    });
  };

  return (
    <div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div className="AddGrade__dialogContent">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Ocena</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={grade}
              onChange={(event) => setGrade(event.target.value)}
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            <TextField
              label="Komentarz do oceny"
              multiline
              rows={14}
              rowsMax={14}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>
          <Button onClick={addGrade}>Oceń</Button>
        </div>
      </Dialog>
      <Button onClick={() => setOpenDialog(!openDialog)}>Oceń</Button>
    </div>
  );
};
