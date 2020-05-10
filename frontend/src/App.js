import React from 'react';
import AppRouter from './router/AppRouter';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import {adminReducer} from "./store/reducers/admin";

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter/>
      </Router>
    </Provider>
  )
}

export default App;
