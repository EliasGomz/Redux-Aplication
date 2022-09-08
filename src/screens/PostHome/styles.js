import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	view: {
		flex: 1,
	},
	postAdd: {
		width: resize(118),
		height: resize(40),
		marginTop: resize(5),
		paddingHorizontal: resize(10),
		flexDirection: 'row',
	},
	customStyleInput: {
		height: '60%',
		width: '70%',
		marginTop: resize(8),
		marginLeft: resize(3),
	},
	customStyleButton: {
		height: resize(18),
		marginTop: resize(12),
		marginLeft: resize(3),
	},
	customStyleTittle: {},
	postFeed: {
		width: '100%',
		height: '100%',
	},
});
export default styles;
