import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, Paper } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import { endpoint } from '../../../constants/endpoints';
import axios from 'axios';
import './StudentPresencePage.scss';
import moment from 'moment';

const StudentPresencePage = () => {
  const [courses, setCourses] = useState([]);
  const [presences, setPresences] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const currentUserData = useSelector((state) => state.auth.userData);

  const orderByDate = (presences) => {
    const cpy = [...presences];
    cpy.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
    return cpy;
  };

  useEffect(() => {
    (async () => {
      const coursesForUser = await axios.get(endpoint.coursesForUser);
      console.log(coursesForUser);
      setCourses(coursesForUser.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let presences = await axios.get(endpoint.presences);
      presences = presences.data.filter(
        (presence) => presence.id_course === selectedCourse
      );
      setPresences(orderByDate(presences));
    })();
  }, [selectedCourse]);

  const countPresence = () =>
    presences.reduce((prev, curr) => prev + (curr.was_present ? 1 : 0), 0);

  return (
    <div>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={3} direction="column">
          <Grid item>Lista przedmiotów</Grid>
          <Grid item>
            <Paper className="presence-list" elevation={3}>
              <List>
                {courses &&
                  courses.map((data, index) => (
                    <ListItem
                      key={index}
                      button
                      onClick={() => {
                        setSelectedCourse(data.id);
                      }}
                    >
                      <ListItemIcon>
                        <MenuBookIcon style={{ color: '#4267B2' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={data.name}
                        secondary={`Prowadzący: ${data.teacher_first_name} ${data.teacher_last_name}`}
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
                  {selectedCourse ? (
                    <>
                      {presences && presences.length > 0 ? (
                        presences.map((presence) => (
                          <li>
                            {moment(presence.date).format(
                              'DD-MM-YYYY HH:mm:ss'
                            )}{' '}
                            -{' '}
                            {presence.was_present ? 'OBECNOŚĆ' : 'NIEOBECNOŚĆ'}
                          </li>
                        ))
                      ) : (
                        <p>Brak odnotowanych obecności na tym przedmiocie!</p>
                      )}
                    </>
                  ) : (
                    <p>Proszę wybrać kurs, aby sprawdzić obecność!</p>
                  )}
                </ul>
              </Grid>
              <Grid item>
                <p className="presence-list-summary">
                  <b>ŁĄCZNIE:</b> obecność(
                  {countPresence()}
                  ), nieobecność(
                  {presences.length - countPresence()})
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
