import { GET_WHILE_SNIPPET_SUCCESS, GET_WHILE_SNIPPET_FAILURE } from '../../action';

const initialState = {
	whileSnippets: [],
	loading: false,
	error: null
};

const whileSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WHILE_SNIPPET_SUCCESS:
			return {
				...state,
				whileSnippets: action.payload,
				loading: false
			};
		case GET_WHILE_SNIPPET_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default whileSnippetReducer;
