/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// libs
import axios from 'axios';

// components
import { Get } from '@api/AxiosRequest';

export const getPost = createAsyncThunk('posts/getPost', async () => {
	return Get('posts');
});

export const createPost = createAsyncThunk(
	'posts/createPost',
	async ({ body, tittle }) => {
		const randomNumber = Math.floor(Math.random() * 10) + 1;
		return await axios
			.post('https://jsonplaceholder.typicode.com/posts', {
				body,
				title: tittle,
				userId: randomNumber,
			})
			.then(response => response.data)
			.catch(error => {
				console.log(error);
			});
	},
);

export const updatePost = createAsyncThunk(
	'posts/updatePost',
	async ({ id, tittle, body }) => {
		const randomNumber = Math.floor(Math.random() * 10) + 1;
		return await axios
			.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
				body,
				title: tittle,
				userId: randomNumber,
			})
			.then(response => response.data)
			.catch(error => {
				console.log(error);
			});
	},
);

export const deletePost = createAsyncThunk(
	'posts/deletePost',
	async ({ postId }) => {
		return axios
			.delete(`https://jsonplaceholder.typicode.com/posts/${postId}/`)
			.then(response => response.data)
			.catch(error => {
				console.log(error);
			});
	},
);

const postSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		isLoading: false,
		error: null,
		edit: false,
	},
	reducers: {
		addPost: (state, action) => {
			state.posts.push(action.payload);
		},
		delPost: (state, action) => {
			state.posts = state.posts.filter(posts => posts.id !== action.payload.id);
		},
		updPost: (state, action) => {
			state.posts.map(posts => {
				if (posts.id === action.payload.id) {
					posts.body = action.payload.body;
					posts.title = action.payload.title;
				}
			});
		},
	},
	extraReducers: {
		[getPost.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getPost.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-sequences
			(state.isLoading = false), (state.posts = action.payload);
		},
		[getPost.rejected]: (state, action) => [
			(state.isLoading = false),
			(state.error = action.payload),
		],
		[createPost.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-sequences
			(state.isLoading = false),
				(state.posts = [action.payload, ...state.posts]);
		},
		[createPost.rejected]: (state, action) => [
			(state.isLoading = false),
			(state.error = action.payload),
		],
		[updatePost.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-sequences
			(state.isLoading = false), (state.posts = [action.payload]);
		},
		[updatePost.rejected]: (state, action) => [
			(state.isLoading = false),
			(state.error = action.payload),
		],
		[deletePost.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-sequences
			(state.isLoading = false), (state.posts = [action.payload]);
		},
		[deletePost.rejected]: (state, action) => [
			(state.isLoading = false),
			(state.error = action.payload),
		],
	},
});

export const { addPost, delPost, updPost } = postSlice.actions;
export default postSlice.reducer;
