import React from "react";
import { Grid, List, ListItem, Paper } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./StudentPresencePage.scss";

const subjectData = [
  { name: "Adam Kowalski", subject: "Matma" },
  { name: "Jan Kowalski", subject: "Infa" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
  { name: "Adam Kowalski", subject: "Matma" },
  { name: "Jan Kowalski", subject: "Infa" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
  { name: "Michał Nowak", subject: "Angielski" },
  { name: "Andrzej Kozak", subject: "Fizyka" },
];

const StudentPresencePage = () => {
  return (
    <div>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={3} direction="column">
          <Grid item>Lista przedmiotów</Grid>
          <Grid item>
            <Paper className="presence-list" elevation={3}>
              <List>
                {subjectData &&
                  subjectData.map((data) => (
                    <ListItem button>
                      <ListItemIcon>
                        <MenuBookIcon style={{ color: "#4267B2" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={data.subject}
                        secondary={`Prowadzący: ${data.name}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={8} direction="column">
          <Grid item>Lista obecności na poszczególnych przedmiotach</Grid>
          <Grid item>
            <Paper
              className="presence-list presence-list-content"
              elevation={3}
            >
              <Grid item>
                <ul>
                  <li>26.02.20 - OBECNOŚĆ</li>
                  <li>03.03.20 - OBECNOŚĆ</li>
                  <li>10.03.20 - BRAK OBECNOŚCI</li>
                </ul>
              </Grid>
              <Grid item>
                <p className="presence-list-summary">
                  ŁĄCZNIE: obecność(2), nieobecność(1)
                </p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentPresencePage;
