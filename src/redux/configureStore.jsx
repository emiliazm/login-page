import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginAuthReducer from './login/reducers';

const store = configureStore({
  reducer: {
    auth: loginAuthReducer,
  },
  middleware: [thunk, logger],
});

export default store;
