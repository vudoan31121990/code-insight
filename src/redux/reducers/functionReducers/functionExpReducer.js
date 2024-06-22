import { GET_FUNCTION_EXP_SUCCESS, GET_FUNCTION_EXP_FAILURE } from '../../action';

const initialState = {
	functionExpSnippets: [],
	loading: false,
	error: null
};

const functionExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FUNCTION_EXP_SUCCESS:
			return {
				...state,
				functionExpSnippets: action.payload,
				loading: false
			};
		case GET_FUNCTION_EXP_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default functionExpReducer;
