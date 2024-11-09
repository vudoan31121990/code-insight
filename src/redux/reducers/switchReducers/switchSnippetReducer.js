import {
	GET_SWITCH_SNIPPET_LOADING,
	GET_SWITCH_SNIPPET_SUCCESS,
	GET_SWITCH_SNIPPET_FAILURE
} from '../../action';

const initialState = {
	switchSnippets: [],
	isLoading: false,
	error: null
};

const switchSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SWITCH_SNIPPET_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_SWITCH_SNIPPET_SUCCESS:
			return {
				...state,
				switchSnippets: action.payload,
				isLoading: false
			};
		case GET_SWITCH_SNIPPET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default switchSnippetReducer;
