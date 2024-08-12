import { GET_FUNCTION_SNIPPET_LOADING, GET_FUNCTION_SNIPPET_SUCCESS, GET_FUNCTION_SNIPPET_FAILURE } from '../../action';

const initialState = {
	functionSnippets: [],
	isLoading: false,
	error: null
};

const functionSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FUNCTION_SNIPPET_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_FUNCTION_SNIPPET_SUCCESS:
			return {
				...state,
				functionSnippets: action.payload,
				isLoading: false
			};
		case GET_FUNCTION_SNIPPET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default functionSnippetReducer;
