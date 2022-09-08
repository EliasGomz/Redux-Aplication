import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// slices
import PostReducer from '@app/PostSlice';
import UserReducer from '@app/UserSlice';
import CommentsReducer from '@app/CommentSlice';

export default configureStore({
	reducer: {
		post: PostReducer,
		user: UserReducer,
		comments: CommentsReducer,
	},
	// middleware: [thunk, logger],
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
