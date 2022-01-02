import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Tag } from './tags-slice';

const API_URL = 'http://localhost:3004';

export const getTags = createAsyncThunk<Tag[], void>(
  'tags/getTags',
  async () => {
    try {
      const res = await axios.get(`${API_URL}/tags`);
      return res.data;
    } catch (e) {
      return Promise.reject(e);
    }
  },
);
