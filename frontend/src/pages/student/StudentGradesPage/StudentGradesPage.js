import React from 'react';
import { Grid, List, ListItem, Paper } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './StudentGradesPage.scss';

const subjectData = [
  { name: 'Adam Kowalski', subject: 'Matma' },
  { name: 'Jan Kowalski', subject: 'Infa' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
  { name: 'Adam Kowalski', subject: 'Matma' },
  { name: 'Jan Kowalski', subject: 'Infa' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
  { name: 'Michał Nowak', subject: 'Angielski' },
  { name: 'Andrzej Kozak', subject: 'Fizyka' },
];

const StudentGradesPage = () => {
  return (
    <div>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={3} direction="column">
          <Grid item>Lista przedmiotów</Grid>
          <Grid item>
            <Paper className="grades-list" elevation={3}>
              <List>
                {subjectData &&
                  subjectData.map((data) => (
                    <ListItem button>
                      <ListItemIcon>
                        <MenuBookIcon style={{ color: '#4267B2' }} />
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
          <Grid item>Lista ocen z poszczególnych przedmiotów</Grid>
          <Grid item>
            <Paper className="grades-list grades-list-content" elevation={3}>
              <Grid item>
                <ul>
                  <li>14.04.20 - 3.5 - Zestaw zadań</li>
                  <li>14.05.20 - 4.5 - Odpowiedź ustna</li>
                </ul>
              </Grid>
              <Grid item>
                <p className="grades-list-summary">ŚREDNIA OCEN: 4.25</p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentGradesPage;
