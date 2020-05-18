import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/commons/LoginPage";
import RegisterPage from "../pages/commons/RegisterPage";
import { ROLES } from "../constants/Constants";
import { PageTemplate } from "../components/PageTemplate";
import { AdminNavigationBar } from "../components/Admin/AdminNavigationBar";
import StudentTopNavbar from "../components/StudentTopNavbar";
import { AdminCoursesPage } from "../pages/admin/AdminCoursesPage/AdminCoursesPage";
import { AdminOpinionsPage } from "../pages/admin/AdminOpinionsPage/AdminOpinionsPage";
import { AdminUsersPage } from "../pages/admin/AdminUsersPage/AdminUsersPage";
import StudentCoursesPage from "../pages/student/StudentCoursesPage/StudentCoursesPage";
import StudentPresencePage from "../pages/student/StudentPresencePage/StudentPresencePage";
import StudentGradesPage from "../pages/student/StudentGradesPage/StudentGradesPage";
import StudentOpinionsPage from "../pages/student/StudentOpinionsPage/StudentOpinionsPage";
import { MessagesPage } from "../pages/commons/MessagesPage/MessagesPage";

const AppRouter = () => {
  const mapState = (state) => ({
    userData: state.auth.userData,
    token: state.auth.token,
    isLogged: state.auth.isLogged,
  });

  let { userData, isLogged } = useSelector(mapState);

  if (isLogged) {
    if (userData.role === ROLES.STUDENT) {
      return (
        <PageTemplate NavbarComponent={StudentTopNavbar}>
          <Switch>
            <Route path="/student/courses">
              <StudentCoursesPage />
            </Route>
            <Route path="/student/presence">
              <StudentPresencePage />
            </Route>
            <Route path="/student/opinions">
              <StudentOpinionsPage />
            </Route>
            <Route path="/student/grades">
              <StudentGradesPage />
            </Route>
            <Route path="/student/messages">
              <MessagesPage />
            </Route>
            <Redirect from="/" to="/student/courses" />
          </Switch>
        </PageTemplate>
      );
    } else if (userData.role === ROLES.ADMIN) {
      return (
        <PageTemplate NavbarComponent={AdminNavigationBar}>
          <Switch>
            <Route path="/admin/courses" render={() => <AdminCoursesPage />} />
            <Route path="/admin/messages" render={() => <MessagesPage />} />
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
            <StudentCoursesPage />
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
