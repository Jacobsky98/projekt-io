import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";
import "./AdminCoursesPage.scss";

const AdminCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://127.0.0.1:8000/courses/").then((res) => {
      setCourses(res.data);
    });
    axios.get("http://127.0.0.1:8000/users/").then((res) => {
      const instructors = res.data
        ? res.data.filter((instructor) => instructor.role === "INSTRUCTOR")
        : [];
      setInstructors(instructors);
    });
  };

  const addCourse = () => {
    if (courseName && selectedInstructor) {
      const courseData = {
        info: courseName,
        id_teacher: selectedInstructor.id,
      };
      axios
        .post("http://127.0.0.1:8000/courses/", courseData)
        .then(() => fetchData());
    }
  };

  return (
    <Grid container>
      <Grid container xs={6} spacing={2} justify="center">
        <Grid item xs={8}>
          Lista wszystkich kursów:
        </Grid>
        <Grid item xs={8}>
          <List className="courses-list">
            {courses &&
              courses.map((course, index) => (
                <div className="course-item">
                  <ListItem key={index}>
                    <ListItemIcon>
                      <MenuBookIcon fontSize={"large"} />{" "}
                    </ListItemIcon>
                    <ListItemText
                      primary={course.info}
                      secondary={`PROWADZĄCY: NIEMA`}
                    ></ListItemText>
                  </ListItem>
                </div>
              ))}
          </List>
        </Grid>
      </Grid>
      <Grid container xs={6} spacing={2} direction="column" justify="center">
        <Grid>Dodaj nowy kurs:</Grid>
        <Grid item xs={8}>
          <Card className="add-course-card">
            <CardContent>
              <Grid container spacing={3} direction="column">
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    onChange={(e) => setCourseName(e.target.value)}
                    label="Nazwa kursu"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    onChange={(e, value) => setSelectedInstructor(value)}
                    options={instructors}
                    getOptionLabel={(instructor) => instructor.username}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Przypisz prowadzącego"
                        variant="outlined"
                      />
                    )}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    onClick={addCourse}
                    color="primary"
                    style={{ width: "100%" }}
                  >
                    Dodaj kurs
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { AdminCoursesPage };
