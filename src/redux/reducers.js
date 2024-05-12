import { combineReducers } from 'redux';
import languagesReducer from './reducers/languagesReducer';
import filtersReducer from './reducers/filtersReducer';
import playgroundsReducer from './reducers/playgroundsReducer';
import classSnippetReducer from './reducers/classSnippetReducer';
import classExpSnippetReducer from './reducers/classExpReducer';

const rootReducer = combineReducers({
	languages: languagesReducer,
	filters: filtersReducer,
	playgrounds: playgroundsReducer,
	classSnippets: classSnippetReducer,
	classExpSnippets: classExpSnippetReducer
});

export default rootReducer;
