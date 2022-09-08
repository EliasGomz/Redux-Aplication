import { Dimensions, Platform } from 'react-native';

export const { width, height } = Dimensions.get(
	Platform.OS === 'android' ? 'screen' : 'window',
);

export const resize = (size, type = 'width') => {
	const currentSize = type === 'width' ? width : height;
	const deviceSize = type === 'width' ? 1440 : 3040; // Size Pixel 4 XL
	const percent = (size * 100) / currentSize;
	const percentJS = percent / 100;

	return deviceSize * percentJS;
};
