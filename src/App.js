import React from 'react';

// components
import Navigation from '@navigation';
import store from '@app/Store';

// libs
import { Provider } from 'react-redux';

import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};
export default App;
