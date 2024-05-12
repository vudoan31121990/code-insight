import { GET_CLASS_SNIPPET_SUCCESS, GET_CLASS_SNIPPET_FAILURE } from '../action';

const initialState = {
	classSnippets: [],
	loading: false,
	error: null
};

const classSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLASS_SNIPPET_SUCCESS:
			return {
				...state,
				classSnippets: action.payload,
				loading: false
			};
		case GET_CLASS_SNIPPET_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default classSnippetReducer;
