import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer';

export const store = preloadedState => {

  const middleware = [...getDefaultMiddleware(), createLogger({ collapsed: true })]

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
    preloadedState
  });

  return store;
};
