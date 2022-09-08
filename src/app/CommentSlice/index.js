/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// components
import { Get } from '@api/AxiosRequest';

export const getComments = createAsyncThunk(
	'comments/getUser',
	async idPost => {
		return Get(`posts/${idPost}/comments`);
	},
);

const CommentsSlice = createSlice({
	name: 'comments',
	initialState: {
		comments: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[getComments.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getComments.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-sequences
			(state.isLoading = false), (state.comments = action.payload);
		},
		[getComments.rejected]: (state, action) => [
			(state.isLoading = false),
			(state.error = action.payload),
		],
	},
});

export default CommentsSlice.reducer;
