import { GET_PLAYGROUNDS_SUCCESS, GET_PLAYGROUNDS_FAILURE } from '../action';

const initialState = {
	playgrounds: [],
	loading: false,
	error: null
};

const playgroundsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PLAYGROUNDS_SUCCESS:
			return {
				...state,
				playgrounds: action.payload,
				loading: false
			};
		case GET_PLAYGROUNDS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default playgroundsReducer;
