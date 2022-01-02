import { createSlice } from '@reduxjs/toolkit';

import { getTags } from './async-actions';

export type Tag = {
  name: string
  count: number
}

export type TagsState = {
  isLoading: boolean
  items: Tag[]
}

const initialState = {
  isLoading: false,
  items: [],
} as TagsState;

const tags = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTags.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTags.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    });
  },
});

export default tags.reducer;
