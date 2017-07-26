import {combineReducers} from 'redux';

import questionsReducer from './questionsReducer';
import questionsReducerGQL from './questionsReducerGQL';

import checksReducerGQL from './checksReducerGQL';
import offlineReducerGQL from './offlineReducerGQL';
import signOffReducerGQL from './signOffReducerGQL';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

//console.log(questionsReducer);


//############ ORIGINAL REDUCER ################
/*const tescoReducers = combineReducers({
    questions: questionsReducerGQL
});*/

//############ NEW REDUCER ################
const tescoReducers = combineReducers({
    getChecks: checksReducerGQL,
    getSignOff: signOffReducerGQL,
    getOffline: offlineReducerGQL
});


export default tescoReducers;
