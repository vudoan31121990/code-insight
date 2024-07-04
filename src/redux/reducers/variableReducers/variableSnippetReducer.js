import { GET_VARIABLE_SNIPPET_SUCCESS, GET_VARIABLE_SNIPPET_FAILURE } from '../../action';

const initialState = {
	variableSnippets: [],
	loading: false,
	error: null
};

const variableSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VARIABLE_SNIPPET_SUCCESS:
			return {
				...state,
				variableSnippets: action.payload,
				loading: false
			};
		case GET_VARIABLE_SNIPPET_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default variableSnippetReducer;
