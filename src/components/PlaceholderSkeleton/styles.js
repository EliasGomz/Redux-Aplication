import { StyleSheet } from 'react-native';

// utils
import { resize } from '@src/utils/Styles';

const styles = StyleSheet.create({
	contSkeleton: {
		flex: 1,
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: resize(5),
		marginTop: resize(20),
		borderWidth: resize(1),
	},
	// line1: {
	// 	width: 60,
	// 	height: 60,
	// 	borderRadius: 50,
	// 	backgroundColor: '#F2F2F2',
	// },
	line2: {
		marginTop: resize(5),
		width: resize(100),
		height: resize(10),
		borderRadius: resize(5),
		backgroundColor: '#F2F2F2',
	},
	line3: {
		marginTop: resize(5),
		width: resize(100),
		height: resize(40),
		borderRadius: resize(5),
		backgroundColor: 'red',
	},
});
export default styles;
