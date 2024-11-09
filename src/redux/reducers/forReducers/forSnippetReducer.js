import {
	GET_FOR_SNIPPET_LOADING,
	GET_FOR_SNIPPET_SUCCESS,
	GET_FOR_SNIPPET_FAILURE
} from '../../action';

const initialState = {
	forSnippets: [],
	isLoading: false,
	error: null
};

const forSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FOR_SNIPPET_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_FOR_SNIPPET_SUCCESS:
			return {
				...state,
				forSnippets: action.payload,
				isLoading: false
			};
		case GET_FOR_SNIPPET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default forSnippetReducer;
