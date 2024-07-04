import { GET_WHILE_EXP_SUCCESS, GET_WHILE_EXP_FAILURE } from '../../action';

const initialState = {
	whileExpSnippets: [],
	loading: false,
	error: null
};

const whileExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WHILE_EXP_SUCCESS:
			return {
				...state,
				whileExpSnippets: action.payload,
				loading: false
			};
		case GET_WHILE_EXP_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default whileExpReducer;
