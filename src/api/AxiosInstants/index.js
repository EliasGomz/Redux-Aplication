import axios from 'axios';
import Config from 'react-native-config';

// const baseURL = Config.BASE_URL;

export default axios.create({
	baseURL: Config.BASE_URL,
});
