import { GET_LANGUAGE_LOADING, GET_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILURE } from '../action';

const initialState = {
	languages: [],
	isLoading: false,
	error: null
};

const languagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LANGUAGE_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_LANGUAGE_SUCCESS:
			return {
				...state,
				languages: action.payload,
				isLoading: false
			};
		case GET_LANGUAGE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default languagesReducer;
