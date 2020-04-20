import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from './pages/commons/LoginPage';
import RegisterPage from './pages/commons/RegisterPage';

const App = () => {
  //trzeba sprawdzic czy user jest zalogowany
  //jesli tak to na jakich prawach - dajemy redirect do odpowiedniej strony
  //domyslnie zawsze wyswietlane LoginPage
  //trzeba zabezpieczyc pozostale podstrony przed wejsciem bez zalogowania (mozna wywalac wtedy na LoginPage)

  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <RegisterPage/>
        </Route>
        <Route path='/'>
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
