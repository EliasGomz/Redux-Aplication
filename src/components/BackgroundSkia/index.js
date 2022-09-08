import React from 'react';
import { Dimensions, Platform } from 'react-native';
import {
	add,
	Canvas,
	Circle,
	LinearGradient,
	vec,
	sub,
	Fill,
	useLoop,
	mix,
	BackdropFilter,
	Blur,
	useComputedValue,
} from '@shopify/react-native-skia';
import styles from './style';

// utils
import { resize } from '@utils/Styles';

const { width, height } = Dimensions.get(
	Platform.OS === 'android' ? 'screen' : 'window',
);

const c = vec((width / resize(3)) * 5, (height / resize(4)) * 9);
const r = c.x - resize(32);

const BackgroundSkia = () => {
	const progress = useLoop({ duration: 5000 });

	const start = useComputedValue(
		() => sub(c, vec(0, mix(progress.current, r, r))),
		[progress],
	);

	const end = useComputedValue(
		() => add(c, vec(0, mix(progress.current, r, r / 2))),
		[progress],
	);

	const radius = useComputedValue(
		() => mix(progress.current, r, r / 2),
		[progress],
	);

	return (
		<Canvas style={styles.canvas}>
			<Fill color={'#E5E8EF'} />
			<Circle c={c} r={radius}>
				<LinearGradient
					start={start}
					end={end}
					colors={['#CDC5FF', '#FFBBC2']}
				/>
			</Circle>
			<BackdropFilter filter={<Blur blur={10} />}>
				<Fill color={'#DFE3E620'} />
			</BackdropFilter>
		</Canvas>
	);
};
export default BackgroundSkia;
