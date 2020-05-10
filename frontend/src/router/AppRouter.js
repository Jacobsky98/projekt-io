import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/commons/LoginPage";
import RegisterPage from "../pages/commons/RegisterPage";
import StudentCourses from "../pages/student/StudentCourses";
import OpinionPage from "../pages/student/OpinionPage";

const AppRouter = () => {
  const [isLogged, setIsLogged] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (userData && token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [userData, token]);

  if (isLogged) {
    return (
      <Switch>
        <Route path="/opinion">
          <OpinionPage />
        </Route>
        <Route path="/">
          <StudentCourses />
        </Route>
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    );
  }
};

export default AppRouter;
