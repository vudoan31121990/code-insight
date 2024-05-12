import { GET_CLASS_EXP_SUCCESS, GET_CLASS_EXP_FAILURE } from "../action";

const initialState = {
    classExpSnippets: [],
    loading: false,
    error: null
};

const classExpReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLASS_EXP_SUCCESS:
            return {
                ...state,
                classExpSnippets: action.payload,
                loading: false
            }; 
        case GET_CLASS_EXP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default classExpReducer;