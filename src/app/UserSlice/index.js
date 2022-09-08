/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// components
import { Get } from '@api/AxiosRequest';

export const getUser = createAsyncThunk('user/getUser', async () => {
	return Get('users');
});

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[getUser.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getUser.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-sequences
			(state.isLoading = false), (state.user = action.payload);
		},
		[getUser.rejected]: (state, action) => [
			(state.isLoading = false),
			(state.error = action.payload),
		],
	},
});

export default userSlice.reducer;
