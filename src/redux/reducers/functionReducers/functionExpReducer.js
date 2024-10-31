import { GET_FUNCTION_EXP_LOADING, GET_FUNCTION_EXP_SUCCESS, GET_FUNCTION_EXP_FAILURE } from '../../action';

const initialState = {
	functionExpSnippets: [],
	isLoading: false,
	error: null
};

const functionExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FUNCTION_EXP_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_FUNCTION_EXP_SUCCESS:
			return {
				...state,
				functionExpSnippets: action.payload,
				isLoading: false
			};
		case GET_FUNCTION_EXP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default functionExpReducer;
