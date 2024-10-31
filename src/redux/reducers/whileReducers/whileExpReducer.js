import { GET_WHILE_EXP_LOADING, GET_WHILE_EXP_SUCCESS, GET_WHILE_EXP_FAILURE } from '../../action';

const initialState = {
	whileExpSnippets: [],
	isLoading: false,
	error: null
};

const whileExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WHILE_EXP_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_WHILE_EXP_SUCCESS:
			return {
				...state,
				whileExpSnippets: action.payload,
				isLoading: false
			};
		case GET_WHILE_EXP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default whileExpReducer;
