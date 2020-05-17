import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, Paper } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import StudentTopNavbar from "../../components/StudentTopNavbar";
import { PageTemplate } from "../../components/PageTemplate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AttendancePage = (props) => {
  const classes = useStyles();

  return (
    <PageTemplate NavbarComponent={StudentTopNavbar}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div>Lista obecności:</div>
          <Paper style={{ height: 600, overflow: "auto" }}>
            <List>
              <Paper>
                <Grid container direction="row">
                  <Grid
                    item
                    xs={2}
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <MenuBookIcon fontSize={"large"} />
                  </Grid>
                  <Grid item xs={10}>
                    <div>Fizyka I</div>
                    <div>Prowadzący: Jan Kowalski</div>
                  </Grid>
                </Grid>
              </Paper>
            </List>
            <List>
              <Paper>
                <Grid container direction="row">
                  <Grid
                    item
                    xs={2}
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <MenuBookIcon fontSize={"large"} />
                  </Grid>
                  <Grid item xs={10}>
                    <div>Fizyka I</div>
                    <div>Prowadzący: Jan Kowalski</div>
                  </Grid>
                </Grid>
              </Paper>
            </List>
            <List>
              <Paper>
                <Grid container direction="row">
                  <Grid
                    item
                    xs={2}
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <MenuBookIcon fontSize={"large"} />
                  </Grid>
                  <Grid item xs={10}>
                    <div>Fizyka I</div>
                    <div>Prowadzący: Jan Kowalski</div>
                  </Grid>
                </Grid>
              </Paper>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <div>Wybrany kurs: Fizyka I</div>
          <Paper
            style={{
              height: 600,
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid item>
              <ul>
                <li>26.02.20 - OBECNOŚĆ</li>
                <li>03.03.20 - OBECNOŚĆ</li>
                <li>10.03.20 - BRAK OBECNOŚCI</li>
              </ul>
            </Grid>
            <Grid item>
              <p>ŁĄCZNIE: obecność(2), nieobecność(1)</p>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </PageTemplate>
  );
};

export default AttendancePage;
