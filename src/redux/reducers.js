import { combineReducers } from 'redux';
import languagesReducer from './reducers/languagesReducer';
import filtersReducer from './reducers/filtersReducer';
import playgroundsReducer from './reducers/playgroundsReducer';
import classSnippetReducer from './reducers/classReducers/classSnippetReducer';
import classExpSnippetReducer from './reducers/classReducers/classExpReducer';
import functionSnippetReducer from './reducers/functionReducers/functionSnippetReducer';
import functionExpSnippetReducer from './reducers/functionReducers/functionExpReducer';
import variableSnippetReducer from './reducers/variableReducers/variableSnippetReducer';
import variableExpSnippetReducer from './reducers/variableReducers/variableExpReducer';

const rootReducer = combineReducers({
	languages: languagesReducer,
	filters: filtersReducer,
	playgrounds: playgroundsReducer,
	classSnippets: classSnippetReducer,
	classExpSnippets: classExpSnippetReducer,
	functionSnippets: functionSnippetReducer,
	functionExpSnippets: functionExpSnippetReducer,
	variableSnippets: variableSnippetReducer,
	variableExpSnippets: variableExpSnippetReducer
});

export default rootReducer;
