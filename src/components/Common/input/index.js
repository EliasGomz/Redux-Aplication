import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

// libs
import PropTypes from 'prop-types';

const Input = ({
	customStyleInput,
	placeholder,
	placeholderTextColor,
	secureTextEntry,
	autoCorrect,
	keyboardType,
	multiline,
	value,
	defaultValue,
	editable,
	onChangeText,
	autoFocus,
}) => {
	return (
		<View style={styles.cont}>
			<TextInput
				style={[styles.input, customStyleInput]}
				multiline
				numberOfLines={3}
				placeholder={placeholder}
				placeholderTextColor={placeholderTextColor}
				secureTextEntry={secureTextEntry}
				autoCorrect={autoCorrect}
				keyboardType={keyboardType}
				value={value}
				defaultValue={defaultValue}
				editable={editable}
				autoFocus={autoFocus}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

Input.defaultProps = {
	placeholder: '',
	placeholderTextColor: 'black',
	defaultValue: '',
	autoCorrect: false,
	secureTextEntry: false,
	onChangeText: () => {},
};

Input.prototype = {
	placeholder: PropTypes.string,
	autoCorrect: PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	onChangeText: PropTypes.func.isRequired,
};
export default Input;
