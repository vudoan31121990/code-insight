import { GET_VARIABLE_EXP_SUCCESS, GET_VARIABLE_EXP_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { functionCodeExpData } from '@src/data/functionData/functionCodeSnippetExample';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const variableExpService = () => {
	if (mockData) {
		return (dispatch) => {
			const data = functionCodeExpData;
			dispatch({ type: GET_VARIABLE_EXP_SUCCESS, payload: data });
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_CLASS_EXP_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_VARIABLE_EXP_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_VARIABLE_EXP_FAILURE, payload: error });
			}
		};
	}
};

export default variableExpService;
