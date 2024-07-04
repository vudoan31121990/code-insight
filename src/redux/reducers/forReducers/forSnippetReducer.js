import { GET_FOR_SNIPPET_SUCCESS, GET_FOR_SNIPPET_FAILURE } from '../../action';

const initialState = {
	forSnippets: [],
	loading: false,
	error: null
};

const forSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FOR_SNIPPET_SUCCESS:
			return {
				...state,
				forSnippets: action.payload,
				loading: false
			};
		case GET_FOR_SNIPPET_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default forSnippetReducer;
