import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';

const PlaceholderSkeleton = () => {
	return (
		<SkeletonPlaceholder>
			<View style={styles.container}>
				<View style={styles.line4}>
					<View style={styles.line2} />
					<View style={styles.line2} />
					<View style={styles.line3} />
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.line4}>
					<View style={styles.line2} />
					<View style={styles.line2} />
					<View style={styles.line3} />
				</View>
			</View>
		</SkeletonPlaceholder>
	);
};
export default PlaceholderSkeleton;
