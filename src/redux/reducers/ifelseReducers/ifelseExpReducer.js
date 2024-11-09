import {
	GET_IFELSE_EXP_LOADING,
	GET_IFELSE_EXP_SUCCESS,
	GET_IFELSE_EXP_FAILURE
} from '../../action';

const initialState = {
	ifelseExpSnippets: [],
	isLoading: false,
	error: null
};

const ifelseExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_IFELSE_EXP_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_IFELSE_EXP_SUCCESS:
			return {
				...state,
				ifelseExpSnippets: action.payload,
				isLoading: false
			};
		case GET_IFELSE_EXP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default ifelseExpReducer;
