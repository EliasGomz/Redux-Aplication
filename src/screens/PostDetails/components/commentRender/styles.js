import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	commentCont: {
		height: resize(50),
		width: '100%',
		marginTop: resize(5),
		borderRadius: resize(5),
		backgroundColor: '#F3F3F390',
		borderWidth: resize(1),
		borderColor: '#FFFFFF',
		paddingHorizontal: resize(5),
		paddingBottom: resize(5),
	},
	viewLine: {
		width: '100%',
		height: resize(1),
		backgroundColor: '#FFFFFF',
	},
	comment: {
		marginTop: resize(2),
		alignSelf: 'center',
		color: 'black',
	},
});
export default styles;
