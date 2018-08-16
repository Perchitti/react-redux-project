import { combineReducers } from 'redux'; //combines all reducers
import postReducer from './postReducer'; //

export default combineReducers({
    posts: postReducer
}); 

// this is the rootReducer 