import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import './PresenceList.scss';
import { ListPresenceItem } from './listPresenceItem/ListPresenceItem';

const mapState = (state) => ({
  presence: state.instructor.presence,
});

export const PresenceList = () => {
  const { presence } = useSelector(mapState);

  return (
    <div className="PresenceList">
      <div className="PresenceList__header">
        <span className="PresenceList__header-primary">Lista Obecności</span>
        <span className="PresenceList__header-secondary">Naciśnij aby zmienić obecność</span>
      </div>
      <div className="PresenceList__list">
        <List>
          {presence.map((student) => (
            <ListPresenceItem student={student}/>
          ))}
        </List>
      </div>
    </div>
  );
};
