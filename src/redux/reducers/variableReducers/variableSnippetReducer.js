import { GET_VARIABLE_EXP_SUCCESS, GET_VARIABLE_EXP_FAILURE } from '../../action';

const initialState = {
	variableSnippets: [],
	loading: false,
	error: null
};

const variableSnippetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VARIABLE_EXP_SUCCESS:
			return {
				...state,
				classSnippets: action.payload,
				loading: false
			};
		case GET_VARIABLE_EXP_FAILURE:
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
