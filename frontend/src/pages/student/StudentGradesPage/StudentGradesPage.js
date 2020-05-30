import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, Paper } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import { endpoint } from '../../../constants/endpoints';
import axios from 'axios';
import './StudentGradesPage.scss';

const StudentGradesPage = () => {
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [average, setAverage] = useState(0);
  const currentUserData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    (async () => {
      const coursesForUser = await axios.get(endpoint.coursesForUser);
      setCourses(coursesForUser.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const grades = await axios.get(endpoint.grades);
      setGrades(grades.data);
      countAverage();
    })();
  }, [selectedCourse]);

  const countAverage = () => {
    const sum = grades.reduce((prev, curr) => curr.grade + prev, 0);
    setAverage(sum);
  };

  return (
    <div>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={3} direction="column">
          <Grid item>Lista przedmiotów</Grid>
          <Grid item>
            <Paper className="grades-list" elevation={3}>
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
                        primary={data.info}
                        secondary={`Prowadzący: ${data.teacher_first_name} ${data.teacher_last_name}`}
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
                {selectedCourse ? (
                  <ul>
                    {grades.map((grade) => (
                      <li>??? - {grade.grade.toFixed(1)} - ???</li>
                    ))}
                  </ul>
                ) : (
                  <p>Proszę wybrać kurs, aby sprawdzić ocenę!</p>
                )}
              </Grid>
              <Grid item>
                <p className="grades-list-summary">
                  <b>ŚREDNIA OCEN:</b> {average.toFixed(2)}
                </p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentGradesPage;
