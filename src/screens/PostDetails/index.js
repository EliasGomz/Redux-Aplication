import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// components
import BackgroundSkia from '@components/BackgroundSkia';
import CommentPost from './components/commentPost';

// libs
import { useRoute } from '@react-navigation/native';
import { format, formatDistance, subDays } from 'date-fns';

// utils
import { parseUser } from '@utils/ParseValidation';

// translation
import { useTranslation } from 'react-i18next';

const PostDetails = () => {
	const { t, i18next } = useTranslation();
	const route = useRoute();
	const item = route.params.item;
	const userDetails = route.params.userDetails;

	const randomNumber = Math.floor(Math.random() * 10) + 1;

	const date = format(new Date(), 'yyyy-MM-dd');
	const dates = formatDistance(
		subDays(new Date(date), randomNumber),
		new Date(),
		{
			addSuffix: true,
		},
	);

	return (
		<View style={styles.postCont}>
			<BackgroundSkia />
			<View style={styles.postContDetails}>
				<View style={styles.postView}>
					<Text style={styles.postNameUser}>
						{userDetails[parseUser(item?.userId)]?.name}
					</Text>
					<Text style={styles.postUsername}>
						{`@${userDetails[parseUser(item?.userId)]?.username}`}
					</Text>
					<Text style={styles.postDate}>{dates}</Text>
				</View>
				<View style={styles.viewLine} />
				<Text style={styles.postTittle}>{item?.title}</Text>
				<View style={styles.viewLine} />
				<Text style={styles.post}>{item?.body}</Text>
			</View>
			<View style={styles.postContComments}>
				<Text style={styles.commentTittle}>{t('postFeed.comments')}</Text>
			</View>
			<CommentPost idPost={item?.id} />
		</View>
	);
};
export default PostDetails;
