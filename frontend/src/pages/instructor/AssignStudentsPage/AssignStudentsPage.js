import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { endpoint } from '../../../constants/endpoints';
import { ROLES } from '../../../constants/Constants';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const AssignStudentsPage = (props) => {
    const mapState = (state) => ({
        userData: state.auth.userData,
      });
    let { userData } = useSelector(mapState);
    
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [studentsAssignedToCourses, setStudentsAssignedToCourses] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [successOpen, setSuccessOpen] = useState(false);
    const [failureOpen, setFailureOpen] = useState(false);

    useEffect(() => {
        fetchStudents();
        fetchStudentsCourses();
        fetchCourses();
    }, [])
  
    const fetchStudents = () => {
        axios.get(endpoint.users).then((res) => {
            if (res.data) {
                setStudents(res.data.filter(u => u.role === ROLES.STUDENT));
            }
        });
    }
    const fetchCourses = () => {
        axios.get(endpoint.courses).then((res) => {
            if (res.data) {
                setCourses(res.data.filter(c => c.id_teacher === userData.id));
            }
        });
    }

    const fetchStudentsCourses = () => {
        // dobrze byloby jeszcze zweryfikowac, ze prowadzacy nie da rady dodac tego samego studenta
        // do tego samego kursu wiecej niz raz. Jesli nie damy rady zrobic po stronie backendu
        // to chociaz po stronie frontendu sprawdzmy.
        console.log('Oczekiwanie na endpoint z backendu')
    }

    const assignStudentToCourse = () => {
        if (selectedCourse && selectedStudent) {
            const assignmentData = {
                id_user: selectedStudent.id,
                id_course: selectedCourse.id
            }
            axios
                .post(endpoint.assignUserToCourse, assignmentData)
                .then(() => setSuccessOpen(true))
                .catch(() => setFailureOpen(true))
        }
        else {
            setFailureOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSuccessOpen(false);
        setFailureOpen(false);
    };

    return (
      <Grid container justify="center" spacing={3} style={{marginTop: 50}}>
          <Grid container spacing={2} xs={6} direction="column">
            <Grid item>
                Przypisz studenta do przedmiotu
            </Grid>
            <Grid item>
                <Autocomplete
                      onChange={(e, value) => setSelectedStudent(value)}
                      options={students}
                      getOptionLabel={(student) => student.first_name + ' ' + student.last_name}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Wybierz studenta"
                            variant="outlined"
                        />
                    )}
                />
            </Grid>
            <Grid item>
                <Autocomplete
                      onChange={(e, value) => setSelectedCourse(value)}
                      options={courses}
                      getOptionLabel={(course) => course.name}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Wybierz przedmiot"
                            variant="outlined"
                        />
                    )}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="outlined"
                    onClick={assignStudentToCourse}
                    color="primary"
                    style={{width: '100%'}}
                  >
                    Zapisz
                  </Button>
            </Grid>

            <Snackbar open={successOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Udało się przypisać studenta do kursu!
                </Alert>
            </Snackbar>
            <Snackbar open={failureOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Wystąpił błąd! Nie udało się przypisać studenta do kursu!
                </Alert>
            </Snackbar>

          </Grid>
      </Grid>
  );
};

