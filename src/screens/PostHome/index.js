import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// components
import BackgroundSkia from '@components/BackgroundSkia';
import PostCard from './components/postCard';

const PostHome = () => {
	return (
		<View style={styles.view}>
			<BackgroundSkia />
			<View style={styles.postFeed}>
				<PostCard />
			</View>
		</View>
	);
};
export default PostHome;
