import { GET_CLASS_EXP_SUCCESS, GET_CLASS_EXP_FAILURE } from '../redux/action';

const classExpService = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(process.env.REACT_APP_CLASS_EXP_API);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            dispatch({ type: GET_CLASS_EXP_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_CLASS_EXP_FAILURE, payload: error });
        }
    };
}

export default classExpService;