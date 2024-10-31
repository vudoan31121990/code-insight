import { GET_FILTERS_LOADING, GET_FILTERS_FAILURE, GET_FILTERS_SUCCESS } from '../action';

const initialState = {
	filters: [],
	isLoading: true,
	error: null
};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FILTERS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_FILTERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				filters: action.payload,
				error: null
			};
		case GET_FILTERS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action
			};
		default:
			return state;
	}
};

export default filtersReducer;
