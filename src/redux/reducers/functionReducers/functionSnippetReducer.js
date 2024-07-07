import { GET_FUNCTION_SNIPPET_SUCCESS, GET_FUNCTION_SNIPPET_FAILURE } from '../../action';

const initialState = {
	functionSnippets: [],
	loading: false,
	error: null
};

const functionSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FUNCTION_SNIPPET_SUCCESS:
			return {
				...state,
				functionSnippets: action.payload,
				loading: false
			};
		case GET_FUNCTION_SNIPPET_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default functionSnippetReducer;
