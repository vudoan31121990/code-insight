import { GET_IFELSE_SNIPPET_LOADING, GET_IFELSE_SNIPPET_SUCCESS, GET_IFELSE_SNIPPET_FAILURE } from '../../action';

const initialState = {
	ifelseSnippets: [],
	isLoading: false,
	error: null
};

const ifelseSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_IFELSE_SNIPPET_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_IFELSE_SNIPPET_SUCCESS:
			return {
				...state,
				ifelseSnippets: action.payload,
				isLoading: false
			};
		case GET_IFELSE_SNIPPET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default ifelseSnippetReducer;
