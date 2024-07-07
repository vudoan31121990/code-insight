import { GET_FOR_EXP_SUCCESS, GET_FOR_EXP_FAILURE } from '../../action';

const initialState = {
	forExpSnippets: [],
	loading: false,
	error: null
};

const forExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FOR_EXP_SUCCESS:
			return {
				...state,
				forExpSnippets: action.payload,
				loading: false
			};
		case GET_FOR_EXP_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default forExpReducer;
