import { StyleSheet } from 'react-native';

// utils
import { resize } from '@utils/Styles';

const styles = StyleSheet.create({
	postCont: {
		flex: 1,
	},
	postContDetails: {
		height: resize(60),
		width: '100%',
		backgroundColor: '#F3F3F390',
		borderWidth: resize(1),
		borderColor: '#FFFFFF',
		paddingHorizontal: resize(5),
		paddingBottom: resize(5),
		marginTop: resize(15),
	},
	postContComments: {
		height: resize(9),
		width: '100%',
		backgroundColor: '#F3F3F390',
		borderBottomWidth: resize(1),
		borderColor: '#FFFFFF',
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
	viewLineComment: {
		width: '100%',
		height: resize(1),
		backgroundColor: '#FFFFFF',
		justifyContent: 'space-between',
	},
	postTittle: {
		color: 'black',
		marginBottom: resize(1),
	},
	post: {
		color: '#404040',
	},
	commentTittle: {
		color: '#404040',
		justifyContent: 'space-evenly',
		fontSize: resize(5),
		textAlign: 'center',
	},
});
export default styles;
