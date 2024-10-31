import {GET_CLASS_EXP_LOADING ,GET_CLASS_EXP_SUCCESS, GET_CLASS_EXP_FAILURE } from '../../action';

const initialState = {
	classExpSnippets: [],
	isLoading: false,
	error: null
};

const classExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLASS_EXP_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_CLASS_EXP_SUCCESS:
			return {
				...state,
				classExpSnippets: action.payload,
				isLoading: false
			};
		case GET_CLASS_EXP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default classExpReducer;
