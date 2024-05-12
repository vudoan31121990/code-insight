import { GET_FILTERS_SUCCESS, GET_FILTERS_FAILURE } from '../redux/action';

const filtersService = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(process.env.REACT_APP_FILTERS_API);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			dispatch({ type: GET_FILTERS_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: GET_FILTERS_FAILURE, payload: error });
		}
	};
};

export default filtersService;
