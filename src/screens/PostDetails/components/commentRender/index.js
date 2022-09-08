import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// libs
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CommentRender = ({ item, idPost }) => {
	return (
		<View style={styles.commentCont}>
			<KeyboardAwareScrollView>
				<Text style={styles.comment}>{item?.email}</Text>
				<View style={styles.viewLine} />
				<Text style={styles.comment}>{item?.name}</Text>
				<View style={styles.viewLine} />
				<Text style={styles.comment}>{item?.body}</Text>
			</KeyboardAwareScrollView>
		</View>
	);
};
export default CommentRender;
