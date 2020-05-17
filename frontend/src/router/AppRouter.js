import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/commons/LoginPage";
import RegisterPage from "../pages/commons/RegisterPage";
import StudentCourses from "../pages/student/StudentCourses";
import { ROLES } from "../constants/Constants";
import { PageTemplate } from "../components/PageTemplate";
import { AdminNavigationBar } from "../components/Admin/AdminNavigationBar";
import { AdminCoursesPage } from "../pages/admin/AdminCoursesPage/AdminCoursesPage";
import { AdminMessagesPage } from "../pages/admin/AdminMessagesPage/AdminMessagesPage";
import { AdminOpinionsPage } from "../pages/admin/AdminOpinionsPage/AdminOpinionsPage";
import { AdminUsersPage } from "../pages/admin/AdminUsersPage/AdminUsersPage";

const AppRouter = () => {
  const mapState = (state) => ({
    userData: state.auth.userData,
    token: state.auth.token,
    isLogged: state.auth.isLogged,
  });

  let { userData, isLogged } = useSelector(mapState);


  return (
    <PageTemplate NavbarComponent={AdminNavigationBar}>
      <Switch>
        <Route path="/admin/courses" render={() => <AdminCoursesPage />} />
        <Route
          path="/admin/messages"
          render={() => <AdminMessagesPage />}
        />
        <Route
          path="/admin/opinions"
          render={() => <AdminOpinionsPage />}
        />
        <Route path="/admin/users" render={() => <AdminUsersPage />} />
        <Redirect from="/" to="/admin/users" />
      </Switch>
    </PageTemplate>
  );

  if (isLogged) {
    if (userData.role === ROLES.STUDENT) {
      return (
        <Switch>
          <Route path="/student">
            <StudentCourses />
          </Route>
          <Redirect from="/" to="/student" />
        </Switch>
      );
    } else if (userData.role === ROLES.ADMIN) {
      return (
        <PageTemplate NavbarComponent={AdminNavigationBar}>
          <Switch>
            <Route path="/admin/courses" render={() => <AdminCoursesPage />} />
            <Route
              path="/admin/messages"
              render={() => <AdminMessagesPage />}
            />
            <Route
              path="/admin/opinions"
              render={() => <AdminOpinionsPage />}
            />
            <Route path="/admin/users" render={() => <AdminUsersPage />} />
            <Redirect from="/" to="/admin/users" />
          </Switch>
        </PageTemplate>
      );
    } else if (userData.role === ROLES.INSTRUCTOR) {
      return (
        <Switch>
          <Route path="/instructor">
            <StudentCourses />
          </Route>
          <Redirect from="/" to="/instructor" />
        </Switch>
      );
    }
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
