import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/commons/LoginPage/LoginPage';
import RegisterPage from '../pages/commons/RegisterPage/RegisterPage';
import { ROLES } from '../constants/Constants';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';
import { AdminNavigationBar } from '../components/AdminNavigationBar/AdminNavigationBar';
import StudentTopNavbar from '../components/StudentTopNavbar/StudentTopNavbar';
import { AdminCoursesPage } from '../pages/admin/AdminCoursesPage/AdminCoursesPage';
import { AdminOpinionsPage } from '../pages/admin/AdminOpinionsPage/AdminOpinionsPage';
import { AdminUsersPage } from '../pages/admin/AdminUsersPage/AdminUsersPage';
import StudentCoursesPage from '../pages/student/StudentCoursesPage/StudentCoursesPage';
import StudentPresencePage from '../pages/student/StudentPresencePage/StudentPresencePage';
import StudentGradesPage from '../pages/student/StudentGradesPage/StudentGradesPage';
import StudentOpinionsPage from '../pages/student/StudentOpinionsPage/StudentOpinionsPage';
import { MessagesPage } from '../pages/commons/MessagesPage/MessagesPage';
import { InstructorNavigationBar } from '../components/InstructorNavigationBar/InstructorNavigationBar';
import { InstructorCoursesPage } from '../pages/instructor/Courses/InstructorCoursesPage';
import { InstructorGradesPage } from '../pages/instructor/Grades/InstructorGradesPage';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem('accessToken')}`;

const AppRouter = () => {
  const mapState = (state) => ({
    userData: state.auth.userData,
    isLogged: state.auth.isLogged,
  });

  let { userData, isLogged } = useSelector(mapState);

  if (isLogged) {
    if (userData.role === ROLES.STUDENT) {
      return (
        <PageTemplate NavbarComponent={StudentTopNavbar}>
          <Switch>
            <Route
              path="/student/courses"
              render={() => <StudentCoursesPage />}
            />
            <Route
              path="/student/presence"
              render={() => <StudentPresencePage />}
            />
            <Route
              path="/student/opinions"
              render={() => <StudentOpinionsPage />}
            />
            <Route
              path="/student/grades"
              render={() => <StudentGradesPage />}
            />
            <Route path="/student/messages" render={() => <MessagesPage />} />
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
        <PageTemplate NavbarComponent={InstructorNavigationBar}>
          <Switch>
            <Route
              path="/instructor/courses"
              render={() => <InstructorCoursesPage />}
            />
            <Route
              path="/instructor/messages"
              render={() => <MessagesPage />}
            />
            <Route
              path="/instructor/grades"
              render={() => <InstructorGradesPage />}
            />
            <Redirect from="/" to="/instructor/courses" />
          </Switch>
        </PageTemplate>
      );
    }
  } else {
    return (
      <Switch>
        <Route path="/register" render={() => <RegisterPage />} />
        <Route path="/" render={() => <LoginPage />} />
      </Switch>
    );
  }
};

export default AppRouter;
