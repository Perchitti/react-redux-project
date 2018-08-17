import React, { Component } from 'react';
import PropTypes from 'prop-types'; //
import { connect } from 'react-redux'; //connects components to redux store that was provided by provider component
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  componentDidMount = () => {
    this.props.fetchPosts();
  }
  // when it mounts make request to API to fetch post

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.newPost) { //we are checking to see if newPost is there
      this.props.posts.unshift(nextProps.newPost); //unshift adds to the beginning
    }
  }
  //when this recieves a new prop from the state it will run ^
  //

  render() {
    //will loops through our API to grab this information
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
      //this post title & body to the page
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({ //getting new items from the state and using it in our component, mapped the items in the state to the posts property
  posts: state.posts.items, //posts, refers to our rootreducer in reducer/index.js
  newPost: state.posts.item //this comes from our reducer
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
//