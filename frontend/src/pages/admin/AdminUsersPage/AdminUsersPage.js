import React, { useState, useEffect } from "react";
import "./AdminUsersPage.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { setShowUserForm } from "../../../store/actions/admin";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://127.0.0.1:8000/users/").then((res) => {
      setUsers(res.data);
    });
  };

  const isFormFilled = () => {
    return (
      username !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      role !== "" &&
      password !== "" &&
      email !== ""
    );
  };

  const createUser = () => {
    if (isFormFilled()) {
      const userData = {
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
        role: role,
      };

      axios.post("http://127.0.0.1:8000/user/create/", userData).then((res) => {
        fetchData();
      });
    }
  };

  const dispatch = useDispatch();
  const mapState = (state) => ({
    showUserForm: state.admin.showUserForm,
  });

  let { showUserForm } = useSelector(mapState);

  return (
    <div className={"admin-user-page"}>
      <div className={`users-list ${showUserForm ? "users-list--active" : ""}`}>
        <div className="users-list__header">
          <span>Lista wszystkich użytkowników:</span>
          <Fab
            color="primary"
            onClick={() => dispatch(setShowUserForm(!showUserForm))}
          >
            <AddIcon />
          </Fab>
        </div>
        <List>
          {users.map((user, index) => {
            return (
              <ListItem button key={index}>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${user.username} ${user.email}`}
                  secondary={`rola: ${user.role}`}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className={`users-form ${showUserForm ? "users-form--active" : ""}`}>
        <TextField
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="Imię"
        />{" "}
        <br />
        <TextField
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label="Nazwisko"
        />{" "}
        <br />
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
        />{" "}
        <br />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Hasło"
        />{" "}
        <br />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />{" "}
        <br />
        <FormControl>
          <InputLabel htmlFor="age-native-simple">Rola</InputLabel>
          <Select native value={role} onChange={(e) => setRole(e.target.value)}>
            <option aria-label="None" value="" />
            <option value="ADMIN">Admin</option>
            <option value="INSTRUCTOR">Prowadzący</option>
            <option value="STUDENT">Student</option>
          </Select>
        </FormControl>{" "}
        <br /> <br />
        <Button onClick={createUser} variant="contained" color="primary">
          Utwórz użytkownika
        </Button>
      </div>
    </div>
  );
};

export { AdminUsersPage };
