import { GET_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILURE } from '../action';

const initialState = {
	languages: [],
	loading: false,
	error: null
};

const languagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LANGUAGE_SUCCESS:
			return {
				...state,
				languages: action.payload,
				loading: false
			};
		case GET_LANGUAGE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default languagesReducer;
