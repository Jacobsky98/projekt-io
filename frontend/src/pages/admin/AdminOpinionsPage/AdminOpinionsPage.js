import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import "./AdminOpinionsPage.scss";

const opinionsPeople = [
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

const opinions = [
  {
    title: "Opinia 1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Ekstra prowadzący",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "Opinia 3",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    title: "Nieekstra prowadzący",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    title: "Opinia 5",
    content: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  },
];

const AdminOpinionsPage = () => {
  return (
    <div>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={3} direction="column">
          <Grid item>Lista prowadzących</Grid>
          <Grid item>
            <Paper className="opinions-list" elevation={3}>
              <List>
                {opinionsPeople &&
                  opinionsPeople.map((person) => (
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
        </Grid>
        <Grid item xs={8} direction="column">
          <Grid item>Opinie o wybranym prowadzącym</Grid>
          <Grid item>
            <Paper className="opinions-list" elevation={3}>
              {opinions &&
                opinions.map((opinion) => (
                  <div className="opinion">
                    <div className="opinion-title">{opinion.title}</div>
                    <div className="opinion-content">{opinion.content}</div>
                  </div>
                ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { AdminOpinionsPage };
