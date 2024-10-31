import { GET_VARIABLE_EXP_LOADING, GET_VARIABLE_EXP_SUCCESS, GET_VARIABLE_EXP_FAILURE } from '../../action';

const initialState = {
	variableExpSnippets: [],
	isLoading: false,
	error: null
};

const variableExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VARIABLE_EXP_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_VARIABLE_EXP_SUCCESS:
			return {
				...state,
				variableExpSnippets: action.payload,
				isLoading: false
			};
		case GET_VARIABLE_EXP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default variableExpReducer;
