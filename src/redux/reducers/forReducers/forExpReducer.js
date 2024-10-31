import { GET_FOR_EXP_LOADING, GET_FOR_EXP_SUCCESS, GET_FOR_EXP_FAILURE } from '../../action';

const initialState = {
	forExpSnippets: [],
	isLoading: false,
	error: null
};

const forExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FOR_EXP_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_FOR_EXP_SUCCESS:
			return {
				...state,
				forExpSnippets: action.payload,
				isLoading: false
			};
		case GET_FOR_EXP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default forExpReducer;
