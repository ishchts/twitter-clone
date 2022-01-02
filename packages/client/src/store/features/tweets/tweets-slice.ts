import { createSlice } from '@reduxjs/toolkit';

import { getTweets } from './async-actions';

export type TTweets = {
  text: string
  user: {
    username: string
    fullName: string
    avatarUrl: string
  }
}

type TTweetsState = {
  isLoading: boolean,
  items: TTweets[]
}

const initialState = {
  isLoading: false,
  items: [],
} as TTweetsState;

const tweets = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTweets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTweets.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    });
  },

});

export default tweets.reducer;
