import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import styles from './styles';

// components
import CommentRender from '../commentRender';
import PlaceholderSkeleton from '@components/PlaceholderSkeleton';
import { getComments } from '@app/CommentSlice';

// redux
import { useSelector, useDispatch } from 'react-redux';

const CommentPost = ({ idPost }) => {
	const { isLoading, comments } = useSelector(state => ({ ...state.comments }));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getComments(idPost));
	}, []);

	return (
		<>
			{isLoading ? (
				<PlaceholderSkeleton />
			) : (
				<FlatList
					style={styles.commentRender}
					data={comments}
					numColumns={1}
					contentContainerStyle={styles.contContendStyle}
					keyExtractor={item => item?.id}
					renderItem={({ item }) => (
						<CommentRender item={item} idPost={idPost} />
					)}
					initialNumToRender={10}
					maxToRenderPerBatch={8}
				/>
			)}
		</>
	);
};
export default CommentPost;
