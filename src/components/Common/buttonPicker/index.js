import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';

// libs
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';

const PikerButton = ({ customPiker }) => {
	const [selectLanguage, setSelectLanguage] = useState('');
	const { t, i18n } = useTranslation();

	if (selectLanguage === '') {
		setSelectLanguage('en');
	}

	useEffect(() => {
		i18n.changeLanguage(selectLanguage);
	}, [selectLanguage]);

	const pikerRef = useRef();

	const open = () => {
		pikerRef.current.focus();
	};

	const close = () => {
		pikerRef.current.focus();
	};

	return (
		<View style={[styles.contPiker, customPiker]}>
			<Picker
				style={styles.piker}
				ref={pikerRef}
				selectedValue={selectLanguage}
				dropdownIconColor={'#FFFFFF50'}
				dropdownIconRippleColor={'#FFFFFF50'}
				onValueChange={(itemValue, itemIndex) => setSelectLanguage(itemValue)}>
				<Picker.Item style={styles.itemsPiker} label="en" value="en" />
				<Picker.Item style={styles.itemsPiker} label="es" value="es" />
			</Picker>
		</View>
	);
};
export default PikerButton;
