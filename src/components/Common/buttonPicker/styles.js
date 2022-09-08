import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	contPiker: {
		width: '50%',
		height: '70%',
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 10,
		alignSelf: 'center',
		justifyContent: 'center',
		left: resize(16),
	},
	piker: {
		flex: 1,
		backgroundColor: '#FFFFFF50',
		justifyContent: 'center',
	},
	itemsPiker: {
		color: 'black',
		fontSize: 17,
	},
});
export default styles;
