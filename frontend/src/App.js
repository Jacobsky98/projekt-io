import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import LoginPage from './pages/commons/LoginPage';
import RegisterPage from './pages/commons/RegisterPage';

import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  
  //trzeba sprawdzic czy user jest zalogowany
  //jesli tak to na jakich prawach - dajemy redirect do odpowiedniej strony
  //domyslnie zawsze wyswietlane LoginPage
  //trzeba zabezpieczyc pozostale podstrony przed wejsciem bez zalogowania (mozna wywalac wtedy na LoginPage)

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App;
