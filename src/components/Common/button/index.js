import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// utils
import { resize } from '@src/utils/Styles';

// libs
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

const Button = ({
	width,
	color,
	tittle,
	backgroundColor,
	fontSize,
	onPress,
	customStyleTittle,
	customStyleButton,
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, { width, backgroundColor }, customStyleButton]}
			activeOpacity={0.7}
			onPress={onPress}>
			<Text
				style={[
					styles.tittle,
					{ color, fontSize: resize(fontSize) },
					customStyleTittle,
				]}>
				{tittle}
			</Text>
		</TouchableOpacity>
	);
};

Button.defaultProps = {
	width: '100%',
	color: 'black',
	tittle: 'default',
	backgroundColor: '#F2F2F2',
	fontSize: 8,
	onPress: () => {},
};

Button.prototype = {
	width: PropTypes.string,
	color: PropTypes.string,
	tittle: PropTypes.string,
	fontSize: PropTypes.number,
	onPress: PropTypes.func.isRequired,
	customStyleIcon: PropTypes.array,
	customStyleTittle: PropTypes.array,
	customStyleButton: PropTypes.array,
};
export default Button;
