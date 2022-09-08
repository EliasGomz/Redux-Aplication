import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	postRender: {
		width: '100%',
	},
	contContendStyle: {
		paddingBottom: resize(10),
		paddingHorizontal: resize(9),
	},
	view: {
		flex: 1,
	},
	postAdd: {
		width: resize(118),
		height: resize(50),
		marginTop: resize(15),
		paddingHorizontal: resize(10),
		flexDirection: 'row',
		borderBottomWidth: resize(1),
		borderTopWidth: resize(1),
		borderColor: '#FFFFFF',
	},
	contInputs: {
		width: '70%',
		height: '100%',
		justifyContent: 'center',
	},
	customStyleInputTittle: {
		height: '30%',
		width: '90%',
		marginTop: resize(25),
		marginLeft: resize(3),
	},
	customStyleInputBody: {
		height: '60%',
		width: '90%',
		marginLeft: resize(3),
		bottom: resize(7),
	},
	customStyleButton: {
		height: resize(18),
		marginTop: resize(12),
		marginLeft: resize(3),
	},
	customStyleTittle: {},
	postFeed: {
		width: resize(118),
		height: resize(176),
	},
	placeholderSkeleton: {
		flex: 1,
	},
});
export default styles;
