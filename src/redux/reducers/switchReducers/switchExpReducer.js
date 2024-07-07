import { GET_SWITCH_EXP_SUCCESS, GET_SWITCH_EXP_FAILURE } from '../../action';

const initialState = {
	switchExpSnippets: [],
	loading: false,
	error: null
};

const switchExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SWITCH_EXP_SUCCESS:
			return {
				...state,
				switchExpSnippets: action.payload,
				loading: false
			};
		case GET_SWITCH_EXP_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default switchExpReducer;
