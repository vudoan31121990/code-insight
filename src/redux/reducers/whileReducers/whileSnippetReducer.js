import {
	GET_WHILE_SNIPPET_LOADING,
	GET_WHILE_SNIPPET_SUCCESS,
	GET_WHILE_SNIPPET_FAILURE
} from '../../action';

const initialState = {
	whileSnippets: [],
	isLoading: false,
	error: null
};

const whileSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WHILE_SNIPPET_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_WHILE_SNIPPET_SUCCESS:
			return {
				...state,
				whileSnippets: action.payload,
				isLoading: false
			};
		case GET_WHILE_SNIPPET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default whileSnippetReducer;
