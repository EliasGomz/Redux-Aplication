import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	postCont: {
		height: resize(50),
		width: '100%',
		marginTop: resize(5),
		borderRadius: resize(5),
		backgroundColor: '#F3F3F390',
		borderWidth: resize(1),
		borderColor: '#FFFFFF',
		paddingHorizontal: resize(5),
		paddingBottom: resize(6),
	},
	postView: {
		flexDirection: 'row',
		marginVertical: resize(2),
	},
	postNameUser: {
		color: 'black',
		marginRight: resize(5),
	},
	postUsername: {
		color: '#606060',
	},
	postDate: {
		color: '#606060',
		marginHorizontal: resize(5),
	},
	viewLine: {
		width: '100%',
		height: resize(1),
		backgroundColor: '#FFFFFF',
	},
	postTittle: {
		color: 'black',
		marginBottom: resize(1),
	},
	post: {
		color: '#404040',
	},
});
export default styles;
