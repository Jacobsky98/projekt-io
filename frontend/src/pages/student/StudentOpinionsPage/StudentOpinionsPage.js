import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Select, TextField, Button } from "@material-ui/core";
import StudentTopNavbar from "../../../components/StudentTopNavbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  width: {
    width: "400px",
    marginBottom: "20px",
  },
}));

const StudentOpinionsPage = (props) => {
  const [opinion, setOpinion] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [wasSent, setWasSent] = useState(false);
  const classes = useStyles();

  const handleSendOpinion = () => {
    if (selectedPerson.length > 0 && opinion.length > 0) {
      setWasSent(true);
      console.log(selectedPerson, opinion);
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
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>Imię i nazwisko #1</option>
            <option value={2}>Imię i nazwisko #2</option>
            <option value={3}>Imię i nazwisko #3</option>
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
