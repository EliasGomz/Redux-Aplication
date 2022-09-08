import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	cont: {
		width: '100%',
		height: '100%',
	},
	input: {
		elevation: resize(5),
		borderRadius: resize(5),
		backgroundColor: '#F2F2F2',
		height: resize(20),
		width: resize(70),
		color: '#000000',
		paddingHorizontal: resize(10),
		borderWidth: 2,
		borderColor: 'white',
	},
});
export default styles;
