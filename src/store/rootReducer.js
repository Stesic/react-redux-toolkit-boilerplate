import { combineReducers } from '@reduxjs/toolkit';

import { slices } from './slices';

const rootReducer = Object.keys(slices).reduce((acc, el) => {
  const slice = slices[el];
  acc[slice.name] = slice.reducer;

  return acc;
}, {});

export default combineReducers(rootReducer);
