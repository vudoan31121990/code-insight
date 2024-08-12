import { GET_SWITCH_EXP_LOADING, GET_SWITCH_EXP_SUCCESS, GET_SWITCH_EXP_FAILURE } from '../../action';

const initialState = {
	switchExpSnippets: [],
	isLoading: false,
	error: null
};

const switchExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SWITCH_EXP_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_SWITCH_EXP_SUCCESS:
			return {
				...state,
				switchExpSnippets: action.payload,
				isLoading: false
			};
		case GET_SWITCH_EXP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default switchExpReducer;
