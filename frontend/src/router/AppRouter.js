import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import LoginPage from '../pages/commons/LoginPage';
import RegisterPage from '../pages/commons/RegisterPage';
import StudentCourses from '../pages/student/StudentCourses';
import {ROLES} from "../constants/Constants";

const AppRouter = () => {
  const mapState = (state) => ({
    userData: state.auth.userData,
    token: state.auth.token,
    isLogged: state.auth.isLogged,
  });

  const {
    userData,
    token,
    isLogged,
  } = useSelector(mapState);

  if (isLogged) {
    if (userData.role === ROLES.STUDENT) {
      return (
          <Switch>
            <Route path='/student'>
              <StudentCourses/>
            </Route>
            <Redirect from='/' to='/student'/>
          </Switch>
      )
    } else if (userData.role === ROLES.ADMIN) {
      return (
          <Switch>
            <Route path='/admin'>
              <StudentCourses/>
            </Route>
          </Switch>
      )
    } else if (userData.role === ROLES.INSTRUCTOR) {
      return (
          <Switch>
            <Route path='/instructor'>
              <StudentCourses/>
            </Route>
          </Switch>
      )
    }
  } else {
    return (
        <Switch>
          <Route path='/register'>
            <RegisterPage/>
          </Route>
          <Route path='/'>
            <LoginPage/>
          </Route>
        </Switch>
    )
  }
}

export default AppRouter;
