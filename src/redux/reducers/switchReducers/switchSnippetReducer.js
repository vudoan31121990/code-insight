import { GET_SWITCH_SNIPPET_SUCCESS, GET_SWITCH_SNIPPET_FAILURE } from '../../action';

const initialState = {
	switchSnippets: [],
	loading: false,
	error: null
};

const switchSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SWITCH_SNIPPET_SUCCESS:
			return {
				...state,
				switchSnippets: action.payload,
				loading: false
			};
		case GET_SWITCH_SNIPPET_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default switchSnippetReducer;
