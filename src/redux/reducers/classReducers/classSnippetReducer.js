import {
	GET_CLASS_SNIPPET_LOADING,
	GET_CLASS_SNIPPET_SUCCESS,
	GET_CLASS_SNIPPET_FAILURE
} from '../../action';

const initialState = {
	classSnippets: [],
	isLoading: false,
	error: null
};

const classSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLASS_SNIPPET_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_CLASS_SNIPPET_SUCCESS:
			return {
				...state,
				classSnippets: action.payload,
				isLoading: false
			};
		case GET_CLASS_SNIPPET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default classSnippetReducer;
