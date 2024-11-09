import {
	GET_PLAYGROUNDS_LOADING,
	GET_PLAYGROUNDS_SUCCESS,
	GET_PLAYGROUNDS_FAILURE
} from '../action';

const initialState = {
	playgrounds: [],
	isLoading: false,
	playgroundError: null
};

const playgroundsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PLAYGROUNDS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_PLAYGROUNDS_SUCCESS:
			return {
				...state,
				playgrounds: action.payload,
				isLoading: false
			};
		case GET_PLAYGROUNDS_FAILURE:
			return {
				...state,
				isLoading: false,
				playgroundError: action.payload
			};
		default:
			return state;
	}
};

export default playgroundsReducer;
