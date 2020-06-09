import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import './AddClass.scss';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { getClasses } from '../../store/actions/instructor';
import { endpoint } from '../../constants/endpoints';

export const AddClass = () => {
  const dispatch = useDispatch();
  const [date, handleDateChange] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false);

  const mapState = (state) => ({
    selectedCourse: state.instructor.selectedCourse,
  });

  const { selectedCourse } = useSelector(mapState);

  const addClass = () => {
    const classToAdd = {
      id_course: selectedCourse.id,
      date,
    };

    axios.post(endpoint.addClass, classToAdd).then(() => {
      dispatch(getClasses(selectedCourse.id));
      setOpenDialog(!openDialog);
    });
  };

  return (
    <div className="AddClass">
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div className="AddClass__dialogContent">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Termin Zajęć"
              disableToolbar
              variant="inline"
              format="dd-MM-yyyy"
              value={date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />

            <KeyboardTimePicker
              label="Godzina"
              value={date}
              ampm={false}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
          <Button onClick={addClass}>Dodaj</Button>
        </div>
      </Dialog>
      <Button variant="outlined" onClick={() => setOpenDialog(!openDialog)}>
        Dodaj Zajęcia
      </Button>
    </div>
  );
};
