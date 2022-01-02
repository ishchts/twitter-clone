import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { TTweets } from './tweets-slice';

const API_URL = 'http://localhost:3004';

export const getTweets = createAsyncThunk<TTweets[], void>(
  'tweets/getTweets',
  async () => {
    try {
      const res = await axios.get(`${API_URL}/tweets`);

      return res.data;
    } catch (e) {
      return Promise.reject(e);
    }
  },
);
