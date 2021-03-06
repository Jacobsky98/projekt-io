import React from 'react';
import AppRouter from './router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import adminReducer from './store/reducers/admin';
import instructorReducer from './store/reducers/instructor';
import globalReducer from './store/reducers/global';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  blacklist: ['global'],
  storage,
};

const appReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  instructor: instructorReducer,
  global: globalReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
const persistor = persistStore(store);

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Router>
          <AppRouter />
        </Router>
      </Provider>
    </PersistGate>
  );
};

export default App;
