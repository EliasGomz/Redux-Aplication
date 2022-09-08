import NewApi from '@api/AxiosInstants';

export const Get = path => {
	return NewApi.get(path)
		.then(res => res.data)
		.catch(err => console.log(err));
};

export const Post = (path, array) => {
	return NewApi.post(path, array)
		.then(res => res.data)
		.catch(err => console.log(err));
};
