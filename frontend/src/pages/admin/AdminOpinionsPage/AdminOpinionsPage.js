import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import { endpoint } from '../../../constants/endpoints';
import { ROLES } from '../../../constants/Constants'
import axios from 'axios';
import './AdminOpinionsPage.scss';

const AdminOpinionsPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [shownOpinions, setShownOpinions] = useState([]);
  const [choosenInstructor, setChoosenInstructor] = useState(null);

  useEffect(() => {
    fetchInstructors();
    fetchOpinions();
  }, [])
  
  const fetchInstructors = () => {
    axios.get(endpoint.users).then((res) => {
      if (res.data) {
        setInstructors(res.data.filter(u => u.role === ROLES.INSTRUCTOR))
      }
    });
  }

  const fetchOpinions = () => {
    axios.get(endpoint.opinions).then((res) => setOpinions(res.data))
  }
  
  const changeShownInstructor = (instructor) => {
    setChoosenInstructor(instructor);
    setShownOpinions(opinions.filter(o => o.id_receiver === instructor.id))
  }

  return (
    <div>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={3} direction="column">
          <Grid item>Lista prowadzących</Grid>
          <Grid item>
            <Paper className="opinions-list" elevation={3}>
              <List>
                {instructors &&
                  instructors.map((instructor) => (
                    <ListItem button onClick={() => changeShownInstructor(instructor)}>
                      <ListItemIcon>
                        <PersonIcon style={{ color: '#4267B2' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={instructor.username}
                        secondary={`Email: ${instructor.email}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={8} direction="column">
          {choosenInstructor && <Grid item>Opinie o wybranym prowadzącym: {choosenInstructor.username}</Grid>}
          {!choosenInstructor && <Grid item>Wybierz prowadzącego z listy po lewej stronie!</Grid>}
          <Grid item>
            <Paper className="opinions-list" elevation={3}>
              {shownOpinions &&
                shownOpinions.map((opinion) => (
                  <div className="opinion">
                    <div className="opinion-title">{opinion.title}</div>
                    <div className="opinion-content">{opinion.content}</div>
                  </div>
                ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { AdminOpinionsPage };
