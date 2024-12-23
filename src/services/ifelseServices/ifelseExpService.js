import {
	GET_IFELSE_EXP_LOADING,
	GET_IFELSE_EXP_SUCCESS,
	GET_IFELSE_EXP_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { ifelseCodeExpData } from '@src/data/ifelseData/ifelseCodeSnippetExample';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const ifelseExpService = () => {
	return async (dispatch) => {
		dispatch({ type: GET_IFELSE_EXP_LOADING });
		try {
			if (mockData) {
				setTimeout(() => {
					const data = ifelseCodeExpData;
					dispatch({ type: GET_IFELSE_EXP_SUCCESS, payload: data });
				}, 2000);
			} else {
				const response = await fetch(`${baseUrl}/api/ifelse-exp`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_IFELSE_EXP_SUCCESS, payload: data });
			}
		} catch (error) {
			dispatch({ type: GET_IFELSE_EXP_FAILURE, payload: error });
		}
	};
};

export default ifelseExpService;
