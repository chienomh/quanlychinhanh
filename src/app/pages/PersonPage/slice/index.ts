import { PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { personalPageStateSaga } from './saga';
import { PersonalPageStateState } from './types';

export const initialState: PersonalPageStateState = {
  showFormEdit: false,
  selectTime: moment().format(),
};

const slice = createSlice({
  name: 'personalPageState',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    setShowFormEdit(state, action: PayloadAction<any>) {
      state.showFormEdit = action.payload;
    },
    setSelectTime(state, action: PayloadAction<any>) {
      state.selectTime = action.payload;
    },
  },
});

export const { actions: personalPageStateActions } = slice;

export const usePersonalPageStateSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: personalPageStateSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = usePersonalPageStateSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
