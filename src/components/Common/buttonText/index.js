import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// utils
import { resize } from '@utils/Styles';

// libs
import PropTypes from 'prop-types';

const ButtonText = ({
	width,
	color,
	tittle,
	fontSize,
	onPress,
	customStyleButtonText,
	customStyleTittle,
}) => {
	return (
		<TouchableOpacity
			style={[styles.buttonText, { width }, customStyleButtonText]}
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

ButtonText.defaultProps = {
	width: '100%',
	color: 'black',
	tittle: 'Default',
	fontSize: resize(15),
	onPress: () => {},
};

ButtonText.prototype = {
	width: PropTypes.string,
	color: PropTypes.string,
	tittle: PropTypes.string,
	fontSize: PropTypes.number,
	onPress: PropTypes.func.isRequired,
	customStyleButtonText: PropTypes.array,
	customStyleTittle: PropTypes.array,
};
export default ButtonText;
