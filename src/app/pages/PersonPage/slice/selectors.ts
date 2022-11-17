import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.personalPageState || initialState;

export const selectPersonalPageState = createSelector(
  [selectSlice],
  state => state,
);
