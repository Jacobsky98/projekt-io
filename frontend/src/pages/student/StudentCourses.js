import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid, Paper, List } from '@material-ui/core';
import StudentTopNavbar from "../../components/StudentTopNavbar";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {PageTemplate} from "../../components/PageTemplate";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function StudentCourses() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <PageTemplate NavbarComponent={StudentTopNavbar}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div>Lista twoich kursów</div>
                    <Paper style={{height: 600, overflow: 'auto'}}>
                        <List>
                            <Paper>
                                <Grid container direction="row">
                                    <Grid item xs={2} container justify="center" alignItems="center"><MenuBookIcon fontSize={'large'}/></Grid>
                                    <Grid item xs={10}>
                                        <div>Fizyka I</div>
                                        <div>Prowadzący: Jan Kowalski</div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </List>
                        <List>
                            <Paper>
                                <Grid container direction="row">
                                    <Grid item xs={2} container justify="center" alignItems="center"><MenuBookIcon fontSize={'large'}/></Grid>
                                    <Grid item xs={10}>
                                        <div>Fizyka I</div>
                                        <div>Prowadzący: Jan Kowalski</div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </List>
                        <List>
                            <Paper>
                                <Grid container direction="row">
                                    <Grid item xs={2} container justify="center" alignItems="center"><MenuBookIcon fontSize={'large'}/></Grid>
                                    <Grid item xs={10}>
                                        <div>Fizyka I</div>
                                        <div>Prowadzący: Jan Kowalski</div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <div>Wybrany kurs: Fizyka I</div>
                    <Paper style={{height: 600}}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Informacje" />
                            <Tab label="Ogłoszenia" />
                            <Tab label="Zadania" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more
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
                            from the 1914 translation by H. Rackham.
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            14.04.2020 <br />
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more
                            obscure Latin words, consectetur, from a Lorem Ipsum passage. <br /> <br />

                            11.04.2020 <br />
                            Discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                            "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
                            for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                            by Cicero are also reproduced in their exa
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Grid container xs={4} >
                                <Paper>
                                    <List>
                                        <div>Zadanie #1</div>
                                        <div>Termin: 14.05.2020 23.59</div>
                                        <div>Status: Nie wysłano</div>
                                    </List>
                                    <List>
                                        <div>Zadanie #2</div>
                                        <div>Termin: 14.05.2020 23.59</div>
                                        <div>Status: Nie wysłano</div>
                                    </List>
                                    <List>
                                        <div>Zadanie #3</div>
                                        <div>Termin: 14.05.2020 23.59</div>
                                        <div>Status: Nie wysłano</div>
                                    </List>
                                </Paper>
                            </Grid>

                        </TabPanel>
                    </Paper>
                </Grid>
            </Grid>
        </PageTemplate>
    )
};

