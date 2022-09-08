import React, { useState, useCallback } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import styles from './style';

// slice
import { delPost, updPost } from '@app/PostSlice';

// redux
import { useDispatch } from 'react-redux';

// components
import ButtonC from '@components/Common/button';
import Input from '@components/Common/input';

// utils
import { resize } from '@utils/Styles';

const ModalDelete = ({ modalIsOpen, setModalIsOpen, posts }) => {
	const [tittle, setTittle] = useState(posts.title);
	const [body, setBody] = useState(posts.body);
	const [showEdit, setShowEdit] = useState(false);
	const dispatch = useDispatch();

	// useCallback = para memorizar funciones , useMemo = para memorizar valores

	const deleteModal = () => {
		// dispatch(deletePost({ postId: posts.id }));
		dispatch(delPost({ id: posts.id }));
		setModalIsOpen(!setModalIsOpen);
	};

	const cancelButtonModal = () => {
		setModalIsOpen(!setModalIsOpen);
		setShowEdit(!showEdit);
	};

	const editModal = () => {
		dispatch(updPost({ id: posts.id, body, title: tittle }));
		setModalIsOpen(!setModalIsOpen);
		setShowEdit(!showEdit);
	};

	const showEditPost = useCallback(() => {
		return (
			<>
				{showEdit && (
					<View style={styles.containerEdit}>
						<Text style={styles.textEdit}>{`PostId: ${posts.id}`}</Text>
						<View style={styles.viewEdit}>
							<Input
								multiline={false}
								autoFocus
								customStyleInput={styles.customStyleInputTittle}
								value={tittle}
								onChangeText={setTittle}
							/>
							<ButtonC
								width="45%"
								fontSize={resize(1.5)}
								tittle="Update"
								customStyleButton={styles.customStyleButton}
								onPress={editModal}
							/>
						</View>
						<Input
							customStyleInput={styles.customStyleInputBody}
							value={body}
							onChangeText={setBody}
						/>
					</View>
				)}
			</>
		);
	}, [showEdit, tittle, body]);

	return (
		<>
			<Modal visible={modalIsOpen} transparent={true}>
				<View style={styles.modalContainer}>
					<View style={styles.modalStyle}>
						<Text style={styles.textModal}>
							What action do you want to perform?
						</Text>
						{showEditPost()}
						<View style={styles.buttonView}>
							<Button
								title="Cancel"
								color={'blue'}
								onPress={cancelButtonModal}
							/>
							<Button
								title="Edit"
								color={'green'}
								onPress={() => setShowEdit(!showEdit)}
							/>
							<Button title="Delete" color={'red'} onPress={deleteModal} />
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
};
export default ModalDelete;
