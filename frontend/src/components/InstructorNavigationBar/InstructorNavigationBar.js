import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';
import { withRouter } from 'react-router-dom';

let InstructorNavigationBar = ({ history, ...props }) => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Przedmioty"
        onClick={() => history.push('/instructor/courses')}
        icon={<MenuBookIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Studenci"
        onClick={() => history.push('/instructor/students')}
        icon={<AssignmentIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Wiadomości"
        onClick={() => history.push('/instructor/messages')}
        icon={<MailOutlineIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Oceny"
        onClick={() => history.push('/instructor/grades')}
        icon={<SchoolIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Wyloguj"
        onClick={() => {
          history.push('/');
          dispatch(authActions.logout());
        }}
        icon={<ExitToAppRoundedIcon fontSize="large" />}
      />
    </BottomNavigation>
  );
};

InstructorNavigationBar = withRouter(InstructorNavigationBar);

export { InstructorNavigationBar };
