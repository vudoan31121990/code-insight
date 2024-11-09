import { GET_FOR_EXP_LOADING, GET_FOR_EXP_SUCCESS, GET_FOR_EXP_FAILURE } from '../../redux/action';
import config from '@src/configmap/config.json';
import { forLoopCodeExpData } from '@src/data/forData/forLoopCodeExample';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;

const forExpService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_FOR_EXP_LOADING });
				const data = forLoopCodeExpData;
				dispatch({ type: GET_FOR_EXP_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(process.env.REACT_APP_FOR_EXP_API);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				dispatch({ type: GET_FOR_EXP_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: GET_FOR_EXP_FAILURE, payload: error });
			}
		};
	}
};

export default forExpService;
