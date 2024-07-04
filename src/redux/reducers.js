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
import ifelseSnippetReducer from './reducers/ifelseReducers/ifelseSnippetReducer';
import ifelseExpReducer from './reducers/ifelseReducers/ifelseExpReducer';
import switchSnippetReducer from './reducers/switchReducers/switchSnippetReducer';
import switchExpSnippetReducer from './reducers/switchReducers/switchExpReducer';
import forSnippetReducer from './reducers/forReducers/forSnippetReducer';
import forExpSnippetReducer from './reducers/forReducers/forExpReducer';
import whileSnippetReducer from './reducers/whileReducers/whileSnippetReducer';
import whileExpSnippetReducer from './reducers/whileReducers/whileExpReducer';

const rootReducer = combineReducers({
	languages: languagesReducer,
	filters: filtersReducer,
	playgrounds: playgroundsReducer,
	classSnippets: classSnippetReducer,
	classExpSnippets: classExpSnippetReducer,
	functionSnippets: functionSnippetReducer,
	functionExpSnippets: functionExpSnippetReducer,
	variableSnippets: variableSnippetReducer,
	variableExpSnippets: variableExpSnippetReducer,
	ifelseSnippets: ifelseSnippetReducer,
	ifelseExpSnippets: ifelseExpReducer,
	switchSnippets: switchSnippetReducer,
	switchExpSnippets: switchExpSnippetReducer,
	forSnippets: forSnippetReducer,
	forExpSnippets: forExpSnippetReducer,
	whileSnippets: whileSnippetReducer,
	whileExpSnippets: whileExpSnippetReducer,
});

export default rootReducer;
