import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDailyCalories = createAsyncThunk(
  'dailyCalories/fetch',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        '/api/health/calculate-calories',
        credentials
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
