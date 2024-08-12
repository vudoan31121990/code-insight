import { GET_PLAYGROUNDS_LOADING ,GET_PLAYGROUNDS_SUCCESS, GET_PLAYGROUNDS_FAILURE } from '../action';

const initialState = {
	playgrounds: [],
	isPlaygroundsLoading: false,
	playgroundError: null
};

const playgroundsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PLAYGROUNDS_LOADING:
			return {
				...state,
				isPlaygroundsLoading: true
			};
		case GET_PLAYGROUNDS_SUCCESS:
			return {
				...state,
				playgrounds: action.payload,
				isPlaygroundsLoading: false
			};
		case GET_PLAYGROUNDS_FAILURE:
			return {
				...state,
				isPlaygroundsLoading: false,
				playgroundError: action.payload
			};
		default:
			return state;
	}
};

export default playgroundsReducer;
