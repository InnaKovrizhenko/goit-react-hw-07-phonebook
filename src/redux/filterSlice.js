import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    getVisibleContact: (state, { payload }) => {
      return {
        ...state,
        filterValue: payload,
      };
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { getVisibleContact } = filterSlice.actions;
