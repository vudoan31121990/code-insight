import { GET_IFELSE_EXP_SUCCESS, GET_IFELSE_EXP_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { ifelseCodeExpData } from '@src/data/ifelseData/ifelseCodeSnippetExample';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const ifelseExpService = () => {
	if (mockData) {
		return (dispatch) => {
			const data = ifelseCodeExpData;
			dispatch({ type: GET_IFELSE_EXP_SUCCESS, payload: data });
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_IFELSE_EXP_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_IFELSE_EXP_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_IFELSE_EXP_FAILURE, payload: error });
			}
		};
	}
};

export default ifelseExpService;
