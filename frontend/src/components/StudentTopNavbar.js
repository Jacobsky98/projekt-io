import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";

import { Grid, IconButton } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SchoolIcon from "@material-ui/icons/School";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

const StudentTopNavbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Grid container xs={12}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={2}
      >
        <Link to="/">
          <IconButton>
            <MenuBookIcon fontSize={"large"} />
          </IconButton>
        </Link>
        <div>Kursy</div>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={2}
      >
        <IconButton>
          <EqualizerIcon fontSize={"large"} />
        </IconButton>
        <div>Obecność</div>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={2}
      >
        <IconButton>
          <SchoolIcon fontSize={"large"} />
        </IconButton>
        <div>Oceny</div>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={2}
      >
        <IconButton>
          <MailOutlineIcon fontSize={"large"} />
        </IconButton>
        <div>Wiadomości</div>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={2}
      >
        <Link to="/opinion">
          <IconButton>
            <ChatBubbleRoundedIcon fontSize={"large"} />
          </IconButton>
        </Link>
        <div>Opinie</div>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={2}
      >
        <IconButton onClick={handleLogout}>
          <ExitToAppRoundedIcon fontSize={"large"} />
        </IconButton>
        <div>Wyloguj</div>
      </Grid>
    </Grid>
  );
};

export default StudentTopNavbar;
