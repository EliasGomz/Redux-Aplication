import { StyleSheet } from 'react-native';

import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: resize(10),
	},
	modalStyle: {
		backgroundColor: '#FFFFFF',
		shadowColor: '#000000',
		shadowOffset: {
			width: resize(0),
			height: resize(1),
		},
		shadowOpacity: resize(0.25),
		shadowRadius: resize(4),
		elevation: resize(5),
		borderRadius: resize(5),
		paddingHorizontal: resize(10),
		paddingBottom: resize(5),
	},
	buttonView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textModal: {
		textAlign: 'center',
		paddingBottom: resize(5),
		paddingTop: resize(5),
		color: 'black',
	},
	containerEdit: {
		height: resize(70),
	},
	textEdit: {
		textAlign: 'center',
		color: 'black',
	},
	viewEdit: {
		flexDirection: 'row',
		width: resize(50),
	},
	customStyleInputTittle: {
		height: '50%',
		width: '90%',
		marginTop: resize(2),
		marginLeft: resize(3),
	},
	customStyleInputBody: {
		height: '50%',
		width: '90%',
		marginLeft: resize(3),
		bottom: resize(12),
	},
	customStyleButton: {
		height: resize(18),
		marginTop: resize(2.5),
	},
});
export default styles;
