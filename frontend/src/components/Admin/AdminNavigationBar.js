import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GroupIcon from '@material-ui/icons/Group';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import {useDispatch} from "react-redux";
import * as authActions from "../../store/actions/auth";
import {withRouter} from "react-router-dom";

let AdminNavigationBar = ({history, ...props}) => {
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
        <BottomNavigationAction label="Users" onClick={() => history.push('/admin/users')} icon={<GroupIcon fontSize='large'/>} />
        <BottomNavigationAction label="Courses" onClick={() => history.push('/admin/courses')} icon={<MenuBookIcon fontSize='large'/>} />
        <BottomNavigationAction label="Messages" onClick={() => history.push('/admin/messages')} icon={<MailOutlineIcon fontSize='large'/>} />
        <BottomNavigationAction label="Opinions" onClick={() => history.push('/admin/opinions')} icon={<ChatBubbleRoundedIcon fontSize='large'/>} />
        <BottomNavigationAction label="Messages" onClick={() => dispatch(authActions.logout())} icon={<ExitToAppRoundedIcon fontSize='large'/>} />
      </BottomNavigation>
  );
};

AdminNavigationBar = withRouter(AdminNavigationBar);

export {
  AdminNavigationBar
}
