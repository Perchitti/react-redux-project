import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}; //createStore requires this

const middleware = [thunk];

const store = createStore( //
    rootReducer, 
    initialState, 
    compose( applyMiddleware(...middleware), //its in a spread operator becuase it's in an array (2 lines up)
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__() //devtools extension
)
);

export default store;

//holds the whole state tree of application
//create the store using a function createstore 
//the posts actually comes from the store with is redux