import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { endpoint } from '../../../constants/endpoints';
import axios from 'axios';
import './StudentCoursesPage.scss';
import moment from 'moment';

const tasks = [
  { name: 'Zadanie #1', deadline: '14.05.2020 23.59', isSent: false },
  { name: 'Zadanie #2', deadline: '12.05.2020 23.59', isSent: false },
  { name: 'Zadanie #3', deadline: '10.05.2020 23.59', isSent: true },
  { name: 'Zadanie #1', deadline: '14.05.2020 23.59', isSent: false },
  { name: 'Zadanie #2', deadline: '12.05.2020 23.59', isSent: false },
  { name: 'Zadanie #3', deadline: '10.05.2020 23.59', isSent: true },
  { name: 'Zadanie #1', deadline: '14.05.2020 23.59', isSent: false },
  { name: 'Zadanie #2', deadline: '12.05.2020 23.59', isSent: false },
  { name: 'Zadanie #3', deadline: '10.05.2020 23.59', isSent: true },
];

const sentFiles = [
  { name: 'zdjecie.jpg' },
  { name: 'main.cpp' },
  { name: 'zdjecie.jpg' },
  { name: 'main.cpp' },
  { name: 'zdjecie.jpg' },
  { name: 'main.cpp' },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function StudentCoursesPage() {
  const [value, setValue] = useState(0);
  const [courses, setCourses] = useState([]);
  const [information, setInformation] = useState(null);
  const [annoucements, setAnnouncements] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const currentUserData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    (async () => {
      const coursesForUser = await axios.get(endpoint.coursesForUser);
      setCourses(coursesForUser.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedCourse) {
        const currentCourse = courses.find(
          (course) => course.id === selectedCourse
        );
        setInformation('info' in currentCourse ? currentCourse.info : null);
        const courseAnnouncements = await axios.get(
          endpoint.courseAnnoucement + currentCourse.id + '/'
        );
        setAnnouncements(courseAnnouncements.data);
      }
    })();
  }, [selectedCourse]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="row" justify="space-around">
      <Grid item xs={3}>
        <div>Lista twoich kursów</div>
        <Paper className="scrollable-list">
          <List>
            {courses &&
              courses.map((data, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    console.log(data);
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
      <Grid item xs={8}>
        <Paper style={{ height: 600 }}>
          <Tabs
            value={value}
            onChange={(event, nevVal) => setValue(nevVal)}
            indicatorColor="primary"
          >
            <Tab label="Informacje" />
            <Tab label="Ogłoszenia" />
            <Tab label="Zadania" />
          </Tabs>
          <TabPanel value={value} index={0}>
            {selectedCourse ? (
              information ? (
                information
              ) : (
                <p>Brak informacji na temat tego kursu!</p>
              )
            ) : (
              <p>Proszę wybrać kurs, aby zobaczyć informacje!</p>
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="notice-list">
              {selectedCourse ? (
                annoucements.length > 0 ? (
                  annoucements &&
                  annoucements.map((item, index) => (
                    <div className="notice" key={index}>
                      <div className="notice-date">
                        {moment(item.date).format('DD-MM-YYYY HH:mm:ss')}
                      </div>
                      <div className="notice-title">{item.title}</div>
                      <div className="notice-content">{item.content}</div>
                    </div>
                  ))
                ) : (
                  <p>Brak ogłoszeń dla tego kursu!</p>
                )
              ) : (
                <p>Proszę wybrać kurs, aby zobaczyć ogłoszenia!</p>
              )}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            {selectedCourse ? (
              <Grid container direction="row" spacing={3}>
                <Grid item xs={4}>
                  <div className="tasks-list">
                    <List>
                      {tasks &&
                        tasks.map((task, index) => (
                          <ListItem button key={index}>
                            <Grid container direction="column">
                              <Grid item>{task.name}</Grid>
                              <Grid item>Termin: {task.deadline}</Grid>
                              <Grid item>
                                STATUS:{' '}
                                {task.isSent ? 'WYSŁANE' : 'NIE WYSŁANO'}
                              </Grid>
                            </Grid>
                          </ListItem>
                        ))}
                    </List>
                  </div>
                </Grid>
                <Grid item xs={8} spacing={3}>
                  <div className="task-information">
                    <div className="task-info">Wybrane zadanie: Zadanie #1</div>
                    {information}
                    {information}
                    {information}
                  </div>
                  <div className="task-actions">
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={8}>
                        <div className="sent-files-area">
                          {sentFiles &&
                            sentFiles.map((file, index) => (
                              <div className="added-file" key={index}>
                                <div>{file.name}</div>
                                <div>
                                  <IconButton style={{ padding: 0 }}>
                                    <CloseIcon className="remove-file-icon" />
                                  </IconButton>
                                </div>
                              </div>
                            ))}
                        </div>
                      </Grid>
                      <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                      >
                        <Grid item>
                          <Button
                            className="button-area"
                            variant="contained"
                            component="label"
                          >
                            Dodaj pliki
                            <input type="file" style={{ display: 'none' }} />
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" color="primary">
                            Wyślij
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            ) : (
              <p>Proszę wybrać kurs, aby zobaczyć zadania!</p>
            )}
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
}
