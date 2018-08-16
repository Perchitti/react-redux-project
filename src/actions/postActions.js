import { FETCH_POSTS, NEW_POST } from "./types";

//each action creater has to be exported
//thunk middleware allows us to call disptach function directly  
//think of dispatch as resolve or promise

export const fetchPosts = () => dispatch => {
  fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({ //we are dispatching the data to the reducer, this calls on the reducer, it jumps to postReducer
        type: FETCH_POSTS,
        payload: posts //the data that is coming in
      })
    );
};

export const createPost = postData => dispatch => { //postData because we're submitting the post
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData) //actual data
  })
    .then(res => res.json()) //telling it we want json data
    .then(post => //then we want the appropriate data back
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
