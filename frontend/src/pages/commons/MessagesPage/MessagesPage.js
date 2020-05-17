import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

import './MessagesPage.scss';

const chatPeople = [
  {name: 'Adam Kowalski', subject: 'Matma' },
  {name: 'Jan Kowalski', subject: 'Infa' },
  {name: 'Michał Nowak', subject: 'Angielski' },
  {name: 'Andrzej Kozak', subject: 'Fizyka' },
  {name: 'Michał Nowak', subject: 'Angielski' },
  {name: 'Andrzej Kozak', subject: 'Fizyka' },
  {name: 'Michał Nowak', subject: 'Angielski' },
  {name: 'Andrzej Kozak', subject: 'Fizyka' },
  {name: 'Michał Nowak', subject: 'Angielski' },
  {name: 'Andrzej Kozak', subject: 'Fizyka' },
]

const messages = [  
  {senderId: 8, content: 'Dzień dobry. Chcę zapytać jak będzie wyglądać zaliczenie z przedmiotu Elektromagnetyzm i optyka? Zdaję sobie sprawę, że przedmito jest trudny i chciałbym zdać to w terminie.'},
  {senderId: 12, content: 'Witam pana serdecznie. Oczywiście bywa różnie. Studenci zwykle nie zdają, a moim życiowym celem jest niezaliczenie im tego przedmiotu.'},
  {senderId: 8, content: 'Co w takim razie mogę zrobić?'},
  {senderId: 8, content: 'Muszę przyznać, że jestem zdesperowany zupelnie.'},
  {senderId: 12, content: 'Proszę postarać się zdać. W połowie semestru prześlę panu wskazówki.'},
  {senderId: 8, content: 'Dziękuję bardzo. Do widzenia.'},
  {senderId: 12, content: 'Do widzenia.'},
  {senderId: 8, content: 'Dzień dobry. Chcę zapytać jak będzie wyglądać zaliczenie z przedmiotu Elektromagnetyzm i optyka? Zdaję sobie sprawę, że przedmito jest trudny i chciałbym zdać to w terminie.'},
  {senderId: 12, content: 'Witam pana serdecznie. Oczywiście bywa różnie. Studenci zwykle nie zdają, a moim życiowym celem jest niezaliczenie im tego przedmiotu.'},
  {senderId: 8, content: 'Co w takim razie mogę zrobić?'},
  {senderId: 8, content: 'Muszę przyznać, że jestem zdesperowany zupelnie.'},
  {senderId: 12, content: 'Proszę postarać się zdać. W połowie semestru prześlę panu wskazówki.'},
  {senderId: 8, content: 'Dziękuję bardzo. Do widzenia.'},
  {senderId: 12, content: 'Do widzenia.'},
  {senderId: 8, content: 'Dzień dobry. Chcę zapytać jak będzie wyglądać zaliczenie z przedmiotu Elektromagnetyzm i optyka? Zdaję sobie sprawę, że przedmito jest trudny i chciałbym zdać to w terminie.'},
  {senderId: 12, content: 'Witam pana serdecznie. Oczywiście bywa różnie. Studenci zwykle nie zdają, a moim życiowym celem jest niezaliczenie im tego przedmiotu.'},
  {senderId: 8, content: 'Co w takim razie mogę zrobić?'},
  {senderId: 8, content: 'Muszę przyznać, że jestem zdesperowany zupelnie.'},
  {senderId: 12, content: 'Proszę postarać się zdać. W połowie semestru prześlę panu wskazówki.'},
  {senderId: 8, content: 'Dziękuję bardzo. Do widzenia.'},
  {senderId: 12, content: 'Do widzenia.'},
]


const MessagesPage = () => {
  return (
      <div>
        <Grid container spacing={3} justify="space-between" direction="row" style={{width: '100%'}}>
          <Grid xs={3} spacing={3} container direction="column">
            <Grid item>
              <Paper style={{ overflowY: 'scroll', height: '500px' }}>
                <List>
                  {chatPeople && 
                    chatPeople.map((person) => 
                    <ListItem button>
                      <ListItemIcon><PersonIcon style={{color: '#4267B2'}}/></ListItemIcon>
                      <ListItemText primary={person.name} secondary={`Przedmiot: ${person.subject}`} />
                    </ListItem>
                    )
                  }
                  </List>
                </Paper>
            </Grid>
            <Grid item>
              <Button style={{width: '100%'}} variant="outlined" color="primary">Nowa wiadomość</Button>
            </Grid>
          </Grid>
          <Grid xs={9} spacing={3} container direction="column">
            <Grid item>Adam Kowalski</Grid>
            <Grid item>
              <Paper style={{ overflowY: 'scroll', height: '400px'}}>
                {messages && messages.map((message) => {
                  return message.senderId == 8 
                  ? <div className="others-message-container"> <div className="others-message">{message.content}</div> </div>
                  : <div className="my-message-container"> <div className="my-message">{message.content}</div> </div>
                })

                }
              </Paper>
            </Grid>
            <Grid item>
              <TextField rows={3} multiline={true} style={{width: '100%'}} variant="outlined" />
            </Grid>
          </Grid>
        </Grid>
      </div>
  );
};

export {
  MessagesPage
}
