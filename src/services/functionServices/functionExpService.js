import {
	GET_FUNCTION_EXP_LOADING,
	GET_FUNCTION_EXP_SUCCESS,
	GET_FUNCTION_EXP_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { functionCodeExpData } from '@src/data/functionData/functionCodeSnippetExample';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const functionExpService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_FUNCTION_EXP_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = functionCodeExpData;
					dispatch({ type: GET_FUNCTION_EXP_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/function-exp`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_FUNCTION_EXP_SUCCESS, payload: data });
			}
		} catch (error) {
			dispatch({ type: GET_FUNCTION_EXP_FAILURE, payload: error });
		}
	};
};

export default functionExpService;
