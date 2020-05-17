import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import "./AdminMessagesPage.scss";

const chatPeople = [
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

const messages = [
  {
    senderId: 8,
    content:
      "Dzień dobry. Chcę zapytać jak będzie wyglądać zaliczenie z przedmiotu Elektromagnetyzm i optyka? Zdaję sobie sprawę, że przedmito jest trudny i chciałbym zdać to w terminie.",
  },
  {
    senderId: 12,
    content:
      "Witam pana serdecznie. Oczywiście bywa różnie. Studenci zwykle nie zdają, a moim życiowym celem jest niezaliczenie im tego przedmiotu.",
  },
  { senderId: 8, content: "Co w takim razie mogę zrobić?" },
  { senderId: 8, content: "Muszę przyznać, że jestem zdesperowany zupelnie." },
  {
    senderId: 12,
    content:
      "Proszę postarać się zdać. W połowie semestru prześlę panu wskazówki.",
  },
  { senderId: 8, content: "Dziękuję bardzo. Do widzenia." },
  { senderId: 12, content: "Do widzenia." },
  {
    senderId: 8,
    content:
      "Dzień dobry. Chcę zapytać jak będzie wyglądać zaliczenie z przedmiotu Elektromagnetyzm i optyka? Zdaję sobie sprawę, że przedmito jest trudny i chciałbym zdać to w terminie.",
  },
  {
    senderId: 12,
    content:
      "Witam pana serdecznie. Oczywiście bywa różnie. Studenci zwykle nie zdają, a moim życiowym celem jest niezaliczenie im tego przedmiotu.",
  },
  { senderId: 8, content: "Co w takim razie mogę zrobić?" },
  { senderId: 8, content: "Muszę przyznać, że jestem zdesperowany zupelnie." },
  {
    senderId: 12,
    content:
      "Proszę postarać się zdać. W połowie semestru prześlę panu wskazówki.",
  },
  { senderId: 8, content: "Dziękuję bardzo. Do widzenia." },
  { senderId: 12, content: "Do widzenia." },
  {
    senderId: 8,
    content:
      "Dzień dobry. Chcę zapytać jak będzie wyglądać zaliczenie z przedmiotu Elektromagnetyzm i optyka? Zdaję sobie sprawę, że przedmito jest trudny i chciałbym zdać to w terminie.",
  },
  {
    senderId: 12,
    content:
      "Witam pana serdecznie. Oczywiście bywa różnie. Studenci zwykle nie zdają, a moim życiowym celem jest niezaliczenie im tego przedmiotu.",
  },
  { senderId: 8, content: "Co w takim razie mogę zrobić?" },
  { senderId: 8, content: "Muszę przyznać, że jestem zdesperowany zupelnie." },
  {
    senderId: 12,
    content:
      "Proszę postarać się zdać. W połowie semestru prześlę panu wskazówki.",
  },
  { senderId: 8, content: "Dziękuję bardzo. Do widzenia." },
  { senderId: 12, content: "Do widzenia." },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid white",
    padding: theme.spacing(2, 4, 3),
    width: "60%",
  },
  width: {
    width: "100%",
    marginBottom: "20px",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
  },
}));

const AdminMessagesPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [person, setPerson] = useState();
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const handleSendMessage = () => {
    if (person.length > 0 && message.length > 0) {
      setIsModalVisible(false);
      console.log(person, message);
    }
  };

  const handleEnterMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleEnterPerson = (event) => {
    setPerson(event.target.value);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 350,
        }}
      >
        <Fade className={classes.modalContent} in={isModalVisible}>
          <Grid item>
            <Grid item className={classes.modalHeader}>
              <p>Wyślij nową wiadomość:</p>
              <CloseIcon
                className={classes.icon}
                onClick={() => setIsModalVisible(false)}
                fontSize={"large"}
              />
            </Grid>
            <Grid item>
              <Select
                className={classes.width}
                native
                variant="outlined"
                value={person}
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
            </Grid>
            <Grid item>
              <TextField
                id="filled-multiline-static"
                label="Podaj swoją wiadomość"
                className={classes.width}
                multiline
                rows={20}
                onChange={handleEnterMessage}
                defaultValue={message}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.width}
                onClick={handleSendMessage}
                variant="contained"
                size="large"
                color="primary"
              >
                Wyślij wiadomość
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
      <Grid
        container
        spacing={3}
        justify="space-between"
        direction="row"
        style={{ width: "100%" }}
      >
        <Grid xs={3} spacing={3} container direction="column">
          <Grid item>
            <Paper style={{ overflowY: "scroll", height: "500px" }}>
              <List>
                {chatPeople &&
                  chatPeople.map((person) => (
                    <ListItem button>
                      <ListItemIcon>
                        <PersonIcon style={{ color: "#4267B2" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={person.name}
                        secondary={`Przedmiot: ${person.subject}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </Grid>
          <Grid item>
            <Button
              style={{ width: "100%" }}
              variant="outlined"
              color="primary"
              onClick={() => setIsModalVisible(true)}
            >
              Nowa wiadomość
            </Button>
          </Grid>
        </Grid>
        <Grid xs={9} spacing={3} container direction="column">
          <Grid item>Adam Kowalski</Grid>
          <Grid item>
            <Paper style={{ overflowY: "scroll", height: "400px" }}>
              {messages &&
                messages.map((message) => {
                  return message.senderId == 8 ? (
                    <div className="others-message-container">
                      {" "}
                      <div className="others-message">
                        {message.content}
                      </div>{" "}
                    </div>
                  ) : (
                    <div className="my-message-container">
                      {" "}
                      <div className="my-message">{message.content}</div>{" "}
                    </div>
                  );
                })}
            </Paper>
          </Grid>
          <Grid item>
            <TextField
              rows={3}
              multiline={true}
              style={{ width: "100%" }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { AdminMessagesPage };
