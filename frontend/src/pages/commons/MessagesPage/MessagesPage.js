import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { Select } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './MessagesPage.scss';
import axios from 'axios';
import { endpoint } from '../../../constants/endpoints';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid white',
    padding: theme.spacing(2, 4, 3),
    width: '60%',
  },
  width: {
    width: '100%',
    marginBottom: '20px',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
  },
}));

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => ++value); // update the state to force render
}

const MessagesPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [person, setPerson] = useState();
  const [message, setMessage] = useState('');
  const [allChatPeople, setAllChatPeople] = useState([]);
  const [chatPeople, setChatPeople] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [content, setContent] = useState('');

  const classes = useStyles();

  const forceUpdate = useForceUpdate();

  const mapState = (state) => ({
    userData: state.auth.userData,
  });
  let { userData } = useSelector(mapState);

  useEffect(() => {
    axios.get(endpoint.users).then((res) => {
      setAllChatPeople(res.data);
    }) 
  }, []);
  
  useEffect(() => {
    getMessages();
  }, [allChatPeople])

  useEffect(() => {
    const filteredPeople = 
      allChatPeople.filter(person => {
        const userId = userData.id;
        const chatterId = person.id
        const didUsersChat = allMessages.find(m => {
          if ((m.id_sender === userId && m.id_receiver === chatterId) || (m.id_sender === chatterId && m.id_receiver === userId)) {
                return true;
          }
          return false;
        })        

        return didUsersChat && person;
      })
    setChatPeople(filteredPeople)
  }, [allMessages])

  const getMessages = () => {
    axios
      .get(endpoint.messages)
      .then((res) => setAllMessages(res.data));
  };

  const handleSendMessage = () => {
    if (person && userData && message.length > 0) {
      const messageData = {
        id_sender: userData.id,
        id_receiver: person,
        content: message,
        title: 'default',
      };

      axios
        .post(endpoint.sendMessage, messageData)
        .then(() => getMessages())

      setIsModalVisible(false)
    }
  };

  const handleEnterMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleEnterPerson = (event) => {
    setPerson(event.target.value);
  };

  const handleChangePerson = (person) => {
    setSelectedUser(person);
    const filteredMessages = allMessages.filter(
      (m) =>
        (m.id_sender === person.id && m.id_receiver === userData.id) ||
        (m.id_sender === userData.id && m.id_receiver === person.id)
    );
    setMessages(filteredMessages);
  };

  const sendMessage = (e) => {
    if (e.key === 'Enter' && content && selectedUser) {
      const messageData = {
        id_sender: userData.id,
        id_receiver: selectedUser.id,
        content: content,
        title: 'default',
      };

      axios
        .post(endpoint.sendMessage, messageData)
        .then(() => {
          setContent('');
          const newAllMessages = allMessages;
          const newFilteredMessages = messages;
          newAllMessages.push(messageData);
          newFilteredMessages.push(messageData);
          setMessages(newFilteredMessages);
          setAllMessages(newAllMessages);
        })
        .then(() => forceUpdate());
    }
  };

  console.log(messages)

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
                fontSize={'large'}
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
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                {allChatPeople
                  .filter(el => !chatPeople.includes(el))
                  .map(person => 
                    <option value={person.id}>{person.first_name} {person.last_name}</option>  
                  )
                }
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
        style={{ width: '100%' }}
      >
        <Grid xs={3} spacing={3} container direction="column">
          <Grid item>
            <Paper style={{ overflowY: 'scroll', height: '500px' }}>
              <List>
                {chatPeople &&
                  chatPeople.map((person) => (
                    <div onClick={() => handleChangePerson(person)}>
                      <ListItem button>
                        <ListItemIcon>
                          <PersonIcon style={{ color: '#4267B2' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={<div>{person.first_name} {person.last_name}</div>}
                          secondary={`Rola: ${person.role}`}
                        />
                      </ListItem>
                    </div>
                  ))}
              </List>
            </Paper>
          </Grid>
          <Grid item>
            <Button
              style={{ width: '100%' }}
              variant="outlined"
              color="primary"
              onClick={() => setIsModalVisible(true)}
            >
              Nowa wiadomość
            </Button>
          </Grid>
        </Grid>
        <Grid xs={9} spacing={3} container direction="column">
          {selectedUser && <Grid item>{selectedUser.first_name} {selectedUser.last_name}</Grid>}
          <Grid item>
            <Paper style={{ overflowY: 'scroll', height: '400px' }}>
              {messages &&
                messages.sort((a, b) => a.date_send > b.date_send).map((message) => {
                  return message.id_sender !== userData.id ? (
                    <div className="others-message-container">
                      {' '}
                      <div className="others-message">
                        {message.content}
                      </div>{' '}
                    </div>
                  ) : (
                    <div className="my-message-container">
                      {' '}
                      <div className="my-message">{message.content}</div>{' '}
                    </div>
                  );
                })}
            </Paper>
          </Grid>
          <Grid item>
            <TextField
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={sendMessage}
              multiline={true}
              style={{ width: '100%' }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { MessagesPage };
