import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { getAnnouncements, setSelectedAnnouncement, setSelectedCourse } from '../../../../../store/actions/instructor';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { useDispatch, useSelector } from 'react-redux';
import './Announcements.scss';

export const Announcements = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    announcements: state.instructor.announcements,
    selectedAnnouncement: state.instructor.selectedAnnouncement,
    selectedCourse: state.instructor.selectedCourse,
  });

  let { announcements, selectedAnnouncement, selectedCourse } = useSelector(mapState);

  useEffect(() => {
    dispatch(getAnnouncements());
  });

  return (
    <div className="instructor-announcements">
      <div className="instructor-announcements__list">
        <List>
          {announcements && announcements.filter((announcement) => announcement.id_course === selectedCourse.id).map((announcement, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {dispatch(setSelectedAnnouncement(announcement))}}
            >
              <ListItemText
                primary={announcement.title}
                secondary={announcement.date}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="instructor-announcements__info">
        <span className="instructor-announcements__info-header">{selectedAnnouncement && selectedAnnouncement.title}</span>
        <p>{selectedAnnouncement && selectedAnnouncement.content}</p>
      </div>
    </div>
  );
};
