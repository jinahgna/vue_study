import axios from 'axios';

const searchModule = {};

searchModule.getModule = (url, data) => {
	try {
		return axios({
			method: 'get',
			baseURL: 'https://openapi.naver.com/v1/search',
			url,
			params: {
				...data,
			},
		});
	} catch (error) {
		return console.error(`[API][searchModule] getModule is failed url: ${url}, error: ${error}`);
	}
};

export default searchModule;