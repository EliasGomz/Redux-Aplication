import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	button: {
		height: resize(20),
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 5,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'white',
	},
	tittle: {
		fontWeight: '500',
		position: 'absolute',
	},
});
export default styles;
