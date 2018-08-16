import { FETCH_POSTS, NEW_POST } from '../actions/types';
//creating initailstate
const intialState = {
    items: [], //this represent the post that come in from our action
    item: {} //this represents the single post that we add
};

export default function(state = intialState, action) { //this function evaluates what type we are dealing with
switch (action.type) { //switch evaluates an expression, matching the expressions value to a case. Type is either FETCH_POST or NEW_POST
    case FETCH_POSTS:
    return { 
        ...state, //returning the current state
        items: action.payload
    };
    case NEW_POST:
    return {
        ...state, //sending out the state with the item
        item: action.payload //payload is a single post
    };
    default:
    return state;
}
}

//this entire thing is meant to evaluate any actions that are committed
//gives access to the state in all of our components 