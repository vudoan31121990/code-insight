import { GET_VARIABLE_SNIPPET_LOADING, GET_VARIABLE_SNIPPET_SUCCESS, GET_VARIABLE_SNIPPET_FAILURE } from '../../action';

const initialState = {
	variableSnippets: [],
	isLoading: false,
	error: null
};

const variableSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VARIABLE_SNIPPET_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_VARIABLE_SNIPPET_SUCCESS:
			return {
				...state,
				variableSnippets: action.payload,
				isLoading: false
			};
		case GET_VARIABLE_SNIPPET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default variableSnippetReducer;
