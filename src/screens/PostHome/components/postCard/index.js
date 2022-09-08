/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { View, FlatList, Keyboard } from 'react-native';
import styles from './styles';

// utils
import { resize } from '@src/utils/Styles';

// components
import PostRender from '../postRender';
import Button from '@components/Common/button';
import Input from '@components/Common/input';
import PlaceholderSkeleton from '@components/PlaceholderSkeleton';
import { getPost, addPost } from '@app/PostSlice';
import { getUser } from '../../../../app/UserSlice';

// translation
import { useTranslation } from 'react-i18next';

// redux
import { useSelector, useDispatch } from 'react-redux';

const PostCard = () => {
	const [body, setBody] = useState('');
	const [tittle, setTittle] = useState('');
	// eslint-disable-next-line no-unused-vars
	const { t, i18next } = useTranslation();
	const { isLoading, posts } = useSelector(state => ({ ...state.post }));
	const { user } = useSelector(state => ({ ...state.user }));
	const dispatch = useDispatch();
	const randomNumber = Math.floor(Math.random() * 10) + 1;

	useEffect(() => {
		dispatch(getPost());
		dispatch(getUser());
	}, []);

	const addP = () => {
		dispatch(
			addPost({
				body,
				id: posts[posts.length - 1].id + 1,
				title: tittle,
				userId: randomNumber,
			}),
			Keyboard.dismiss(),
			setBody(''),
			setTittle(''),
		);
	};

	return (
		<>
			{isLoading ? (
				<PlaceholderSkeleton />
			) : (
				<>
					<View style={styles.postAdd}>
						<Button
							customStyleButton={styles.customStyleButton}
							customStyleTittle={styles.customStyleTittle}
							width="25%"
							fontSize={resize(1.7)}
							tittle={t('postAdd.add')}
							// onPress={() => dispatch(createPost({ body, tittle }))}
							onPress={addP}
						/>
						<View style={styles.contInputs}>
							<Input
								customStyleInput={styles.customStyleInputTittle}
								multiline={false}
								value={tittle}
								placeholder={t('postAdd.tittle')}
								onChangeText={setTittle}
							/>
							<Input
								customStyleInput={styles.customStyleInputBody}
								placeholder={t('postAdd.what do you think?')}
								value={body}
								onChangeText={setBody}
							/>
						</View>
					</View>
					<FlatList
						style={styles.postRender}
						data={posts}
						numColumns={1}
						contentContainerStyle={styles.contContendStyle}
						keyExtractor={item => item?.id}
						renderItem={({ item }) => (
							<PostRender item={item} userDetails={user} />
						)}
						initialNumToRender={10}
						maxToRenderPerBatch={8}
					/>
				</>
			)}
		</>
	);
};
export default PostCard;
