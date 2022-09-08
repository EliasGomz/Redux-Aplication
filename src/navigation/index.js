import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import PostHome from '@screens/PostHome';
import PostDetails from '@screens/PostDetails';

// translation
import { useTranslation } from 'react-i18next';

// components
import PikerButton from '@components/Common/buttonPicker';
import { getPost } from '@app/PostSlice';

// redux
import { useDispatch } from 'react-redux';

const MyStack = () => {
	const HomeStack = createNativeStackNavigator();
	const { t, i18next } = useTranslation();
	const dispatch = useDispatch();

	return (
		<HomeStack.Navigator initialRouteName="PostHome">
			<HomeStack.Screen
				name="PostHome"
				component={PostHome}
				options={{
					title: `${t('navigation.posts')}`,
					headerRight: () => <PikerButton />,
					headerLeft: () => (
						<Button title="Reload" onPress={() => dispatch(getPost())} />
					),
					headerTitleAlign: 'center',
					headerTintColor: '#000000',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					headerTransparent: true,
					contentStyle: {
						borderTopWidth: 2,
						borderTopColor: '#FFFFFF',
					},
				}}
			/>
			<HomeStack.Screen
				name="PostDetails"
				component={PostDetails}
				options={{
					title: `${t('navigation.details')}`,
					headerTitleAlign: 'center',
					headerTintColor: '#000000',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					headerTransparent: true,
					contentStyle: {
						borderTopWidth: 2,
						borderTopColor: '#FFFFFF',
					},
				}}
			/>
		</HomeStack.Navigator>
	);
};

const Navigation = () => {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
};
export default Navigation;
