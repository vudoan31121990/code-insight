import {
	GET_CLASS_EXP_LOADING,
	GET_CLASS_EXP_SUCCESS,
	GET_CLASS_EXP_FAILURE
} from '../../redux/action';
import config from '@src/configmap/config.json';
import { classCodeExpData } from '@src/data/classData/classCodeSnippetExample';

const mockData = config.MOCK_SERVICES_DATA.ENABLED;
const baseUrl = process.env.REACT_APP_BASE_URL;

const classExpService = () => {
	if (mockData) {
		return (dispatch) => {
			setTimeout(() => {
				dispatch({ type: GET_CLASS_EXP_LOADING });
				const data = classCodeExpData;
				dispatch({ type: GET_CLASS_EXP_SUCCESS, payload: data });
			}, 2000);
		};
	} else {
		return async (dispatch) => {
			try {
				const response = await fetch(`${baseUrl}/api/class-exp`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const responseJson = await response.json();
				dispatch({ type: GET_CLASS_EXP_SUCCESS, payload: responseJson.data });
			} catch (error) {
				dispatch({ type: GET_CLASS_EXP_FAILURE, payload: error });
			}
		};
	}
};

export default classExpService;
