import { GET_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILURE } from '../redux/action';

const languagesService = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(process.env.REACT_APP_LANGUAGES_API);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			dispatch({ type: GET_LANGUAGE_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: GET_LANGUAGE_FAILURE, payload: error });
		}
	};
};

export default languagesService;
