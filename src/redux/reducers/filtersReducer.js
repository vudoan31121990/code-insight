import { GET_FILTERS_FAILURE, GET_FILTERS_SUCCESS } from '../action';

const initialState = {
	filters: [],
	loading: false,
	error: null
};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FILTERS_SUCCESS:
			return {
				...state,
				loading: false,
				filters: action.payload
			};
		case GET_FILTERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default filtersReducer;
