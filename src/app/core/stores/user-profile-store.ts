import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserProfile} from '../models';
import {authService} from '../services';

export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async () => {
    const response = await authService.getUserProfile();
    return response;
  },
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    isLoading: false,
    error: null,
    userProfile: null as UserProfile | null,
  },
  reducers: {
    clearUserProfile(state) {
      state.userProfile = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserProfile.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userProfile = action.payload.data;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      if (state.error == null) {
        state.error = null;
      }
      state.isLoading = false;
    });
  },
});

const userProfileReducer = userProfileSlice.reducer;
export const {clearUserProfile} = userProfileSlice.actions;
export {userProfileReducer};
