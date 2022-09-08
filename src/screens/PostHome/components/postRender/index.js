import React, { memo, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// libs
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { format, formatDistance, subDays } from 'date-fns';

// components
import ModalDelete from '@components/ModalDelete';
// import { getUser } from '@app/UserSlice';
// import { deletePost } from '@app/PostSlice';

// utils
import { parseUser } from '@utils/ParseValidation';

// redux
// import { useSelector, useDispatch } from 'react-redux';

const PostRender = ({ item, userDetails }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const navigation = useNavigation();
	// const { isLoading, user } = useSelector(state => ({ ...state.user }));
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getUser());
	// }, []);

	// console.log(user);
	// console.log(isLoading);

	const PostDetails = () => {
		navigation.navigate('PostDetails', {
			item,
			userDetails,
		});
	};

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
		<TouchableOpacity
			style={styles.postCont}
			activeOpacity={0.6}
			onPress={PostDetails}
			onLongPress={() => setModalIsOpen(!modalIsOpen)}>
			<ModalDelete
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
				posts={item}
			/>
			<KeyboardAwareScrollView>
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
			</KeyboardAwareScrollView>
		</TouchableOpacity>
	);
};
export default memo(PostRender);
