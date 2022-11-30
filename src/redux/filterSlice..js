import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: '',

  reducers: {
    filterContacts: (state, action) => action.payload,
  },
});

export const { filterContacts } = filterSlice.actions;

const filterReducer = filterSlice.reducer;

export default filterReducer;
