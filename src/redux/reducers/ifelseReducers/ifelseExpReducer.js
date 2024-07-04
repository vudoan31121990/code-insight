import { GET_IFELSE_EXP_SUCCESS, GET_IFELSE_EXP_FAILURE } from '../../action';

const initialState = {
	ifelseExpSnippets: [],
	loading: false,
	error: null
};

const ifelseExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_IFELSE_EXP_SUCCESS:
			return {
				...state,
				ifelseExpSnippets: action.payload,
				loading: false
			};
		case GET_IFELSE_EXP_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default ifelseExpReducer;
