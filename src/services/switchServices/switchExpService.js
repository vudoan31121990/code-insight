import { GET_SWITCH_EXP_LOADING, GET_SWITCH_EXP_SUCCESS, GET_SWITCH_EXP_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { switchCodeExpData } from '@src/data/switchData/switchCodeSnippetExample';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const switchExpService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_SWITCH_EXP_LOADING});
				const data = switchCodeExpData;
				dispatch({ type: GET_SWITCH_EXP_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_SWITCH_EXP_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_SWITCH_EXP_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_SWITCH_EXP_FAILURE, payload: error });
			}
		};
	}
};

export default switchExpService;
