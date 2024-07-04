import { GET_IFELSE_SNIPPET_SUCCESS, GET_IFELSE_SNIPPET_FAILURE } from '../../action';

const initialState = {
	ifelseSnippets: [],
	loading: false,
	error: null
};

const ifelseSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_IFELSE_SNIPPET_SUCCESS:
			return {
				...state,
				ifelseSnippets: action.payload,
				loading: false
			};
		case GET_IFELSE_SNIPPET_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default ifelseSnippetReducer;
