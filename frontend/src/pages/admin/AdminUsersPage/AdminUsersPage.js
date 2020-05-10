import React from "react";
import './AdminUsersPage.scss'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch, useSelector} from "react-redux";
import {setShowUserForm} from "../../../store/actions/admin";


const tempData = [];
const createTempData = () => {
  for (let i = 0 ; i < 100 ; i++) {
    tempData.push({
      name: "Jan",
      surname: "Kowalski",
      role: "STUDENT"
    })
  }
};

createTempData();

const AdminUsersPage = () => {
  const dispatch = useDispatch();
  const mapState = (state) => ({
    showUserForm: state.admin.showUserForm,
  });

  let {
    showUserForm,
  } = useSelector(mapState);

  return (
      <div className={'admin-user-page'}>
        <div className={`users-list ${showUserForm ? 'users-list--active' : ''}`}>
          <div className='users-list__header'>
            <span>Lista wszystkich użytkowników:</span>
            <Fab color="primary" onClick={() => dispatch(setShowUserForm(!showUserForm))}>
              <AddIcon />
            </Fab>
          </div>
          <List>
            {tempData.map((item, index) => {
              return (
                  <ListItem button key={index}>
                    <ListItemIcon>
                      <PermIdentityIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${item.name} ${item.surname}`} secondary={`rola: ${item.role}`}/>
                  </ListItem>
              );
            })}
          </List>
        </div>
        <div className={`users-form ${showUserForm ? 'users-form--active' : ''}`}>
          Cokolwie
        </div>
      </div>
  );
};

export {
  AdminUsersPage
}
