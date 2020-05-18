import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";
import { Grid, IconButton } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SchoolIcon from "@material-ui/icons/School";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

let StudentTopNavbar = ({ history, ...props }) => {
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
        label="Kursy"
        onClick={() => history.push("/student/courses")}
        icon={<MenuBookIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Oceny"
        onClick={() => history.push("/student/grades")}
        icon={<SchoolIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Obecność"
        onClick={() => history.push("/student/presence")}
        icon={<EqualizerIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Wiadomości"
        onClick={() => history.push("/student/messages")}
        icon={<MailOutlineIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Opinie"
        onClick={() => history.push("/student/opinions")}
        icon={<ChatBubbleRoundedIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Wyloguj się"
        onClick={() => dispatch(authActions.logout())}
        icon={<ExitToAppRoundedIcon fontSize="large" />}
      />
    </BottomNavigation>
  );
};

StudentTopNavbar = withRouter(StudentTopNavbar);
export default StudentTopNavbar;
