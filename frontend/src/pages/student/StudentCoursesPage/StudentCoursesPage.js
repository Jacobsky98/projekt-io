import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid, Paper } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./StudentCoursesPage.scss";

const subjects = [
  { name: "Fizyka I", tutor: "Adam Kowalski" },
  { name: "Fizyka II", tutor: "Adam Kowalski" },
  { name: "Matma I", tutor: "Adam Kowalski" },
  { name: "Angielski", tutor: "Inny Kowalski" },
  { name: "Algorytmy", tutor: "Taki Kowalski" },
  { name: "WF", tutor: "Jan Kowalski" },
  { name: "Fizyka I", tutor: "Adam Kowalski" },
  { name: "Fizyka II", tutor: "Adam Kowalski" },
  { name: "Matma I", tutor: "Adam Kowalski" },
  { name: "Angielski", tutor: "Inny Kowalski" },
  { name: "Algorytmy", tutor: "Taki Kowalski" },
  { name: "WF", tutor: "Jan Kowalski" },
];

const information = `Contrary to popular belief, Lorem Ipsum is not simply random text.
It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old. 
Richard McClintock, a Latin professorat Hampden-Sydney College in Virginia, looked up one of the more
obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
through the cites of the word in classical literature, discovered the
undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
written in 45 BC. This book is a treatise on the theory of ethics, very popular
during the Renaissance. The first line of Lorem Ipsum,
"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
by Cicero are also reproduced in their exact original form, accompanied by English versions
from the 1914 translation by H. Rackham.`;

const notices = [
  {
    date: "11-05-2020",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    date: "10-05-2020",
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    date: "09-05-2020",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    date: "08-05-2020",
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    date: "07-05-2020",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    date: "06-05-2020",
    content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
];

const tasks = [
  { name: "Zadanie #1", deadline: "14.05.2020 23.59", isSent: false },
  { name: "Zadanie #2", deadline: "12.05.2020 23.59", isSent: false },
  { name: "Zadanie #3", deadline: "10.05.2020 23.59", isSent: true },
  { name: "Zadanie #1", deadline: "14.05.2020 23.59", isSent: false },
  { name: "Zadanie #2", deadline: "12.05.2020 23.59", isSent: false },
  { name: "Zadanie #3", deadline: "10.05.2020 23.59", isSent: true },
  { name: "Zadanie #1", deadline: "14.05.2020 23.59", isSent: false },
  { name: "Zadanie #2", deadline: "12.05.2020 23.59", isSent: false },
  { name: "Zadanie #3", deadline: "10.05.2020 23.59", isSent: true },
];

const sentFiles = [
  { name: "zdjecie.jpg" },
  { name: "main.cpp" },
  { name: "zdjecie.jpg" },
  { name: "main.cpp" },
  { name: "zdjecie.jpg" },
  { name: "main.cpp" },
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="row" justify="space-around">
      <Grid item xs={3}>
        <div>Lista twoich kursów</div>
        <Paper className="scrollable-list">
          <List>
            {subjects &&
              subjects.map((subject) => (
                <ListItem button>
                  <ListItemIcon>
                    <MenuBookIcon style={{ color: "#4267B2" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={subject.name}
                    secondary={`Prowadzący: ${subject.tutor}`}
                  />
                </ListItem>
              ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <div>Wybrany kurs: Fizyka I</div>
        <Paper style={{ height: 600 }}>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary">
            <Tab label="Informacje" />
            <Tab label="Ogłoszenia" />
            <Tab label="Zadania" />
          </Tabs>
          <TabPanel value={value} index={0}>
            {information}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="notice-list">
              {notices &&
                notices.map((notice) => (
                  <div className="notice">
                    <div className="notice-date">{notice.date}</div>
                    <div className="notice-content">{notice.content}</div>
                  </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={4}>
                <div className="tasks-list">
                  <List>
                    {tasks &&
                      tasks.map((task) => (
                        <ListItem button>
                          <Grid container direction="column">
                            <Grid item>{task.name}</Grid>
                            <Grid item>Termin: {task.deadline}</Grid>
                            <Grid item>
                              STATUS: {task.isSent ? "WYSŁANE" : "NIE WYSŁANO"}
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
                          sentFiles.map((file) => (
                            <div className="added-file">
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
                      xs={4}
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
                          <input type="file" style={{ display: "none" }} />
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
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
}
