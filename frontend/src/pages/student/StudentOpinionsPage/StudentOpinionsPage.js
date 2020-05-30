import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Select, TextField, Button } from '@material-ui/core';
import { endpoint } from '../../../constants/endpoints';
import { ROLES } from '../../../constants/Constants';
import { useSelector } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  width: {
    width: '800px',
    marginBottom: '20px',
  },
}));

const StudentOpinionsPage = (props) => {
  const [opinion, setOpinion] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [instructors, setInstructors] = useState([]);
  const [wasSent, setWasSent] = useState(false);
  const classes = useStyles();
  const currentUserData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    (async () => {
      const users = await axios.get(endpoint.users);
      const instructors = users.data.filter(
        (user) => user.role === ROLES.INSTRUCTOR
      );
      setInstructors(instructors);
    })();
  }, []);

  const handleSendOpinion = async () => {
    if (selectedPerson.length > 0 && opinion.length > 0) {
      await axios.post(endpoint.sendOpinion, {
        id_sender: currentUserData.id,
        id_receiver: selectedPerson,
        title: 'TITLE IS ALWAYS EMPTY',
        content: opinion,
      });
      setWasSent(true);
    }
  };

  const handleEnterOpinion = (event) => {
    setOpinion(event.target.value);
  };

  const handleEnterPerson = (event) => {
    setSelectedPerson(event.target.value);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <p>Wyraź swoją opinię o prowadzącym:</p>
          <Select
            className={classes.width}
            native
            variant="outlined"
            value={selectedPerson}
            onChange={handleEnterPerson}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {instructors &&
              instructors.map((instructor) => (
                <option value={instructor.id}>
                  {instructor.first_name} {instructor.last_name}
                </option>
              ))}
          </Select>
          <Grid item xs={6}>
            <TextField
              id="filled-multiline-static"
              label="Powiedz nam, co myślisz"
              className={classes.width}
              multiline
              rows={10}
              onChange={handleEnterOpinion}
              defaultValue={opinion}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            {wasSent ? (
              <p>Twoja opinia została wysłana!</p>
            ) : (
              <Button
                className={classes.width}
                onClick={handleSendOpinion}
                variant="contained"
                size="large"
                color="primary"
              >
                Wyślij opinię
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentOpinionsPage;
