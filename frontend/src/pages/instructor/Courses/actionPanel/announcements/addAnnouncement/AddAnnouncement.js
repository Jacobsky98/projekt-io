import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './AddAnnouncement.scss';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { putAnnouncement } from '../../../../../../store/actions/instructor';

export const AddAnnouncement = ({ onCancel, course }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onAdd = () => {
    const announcement = {
      id_course: course.id,
      date: new Date(),
      title,
      content,
    };

    dispatch(putAnnouncement(announcement));
    onCancel();
  };

  return (
    <div className="instructor-add-announcement">
      <span>Dodaj Ogłoszenie</span>
      <div className="instructor-add-announcement__form">
        <TextField
          label="Tytuł"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          label="Treść"
          multiline
          rows={14}
          rowsMax={14}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <div className="instructor-add-announcement__buttons">
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
