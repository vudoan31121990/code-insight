import { GET_PLAYGROUNDS_SUCCESS, GET_PLAYGROUNDS_FAILURE } from '../redux/action';

const playgroundsService = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(process.env.REACT_APP_PLAYGROUNDS_API);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			dispatch({ type: GET_PLAYGROUNDS_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: GET_PLAYGROUNDS_FAILURE, payload: error });
		}
	};
};

export default playgroundsService;
