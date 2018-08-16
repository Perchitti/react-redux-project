import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this); //this enables onChange to access 'this'
    this.onSubmit = this.onSubmit.bind(this); //this enables onSubmit access to 'this'
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }); //allows typing inside form, makes sure where clicking on form matches the names in the state
  };


  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title, //these are the items I want to submit
      body: this.state.body
    };

    this.props.createPost(post);  
  };

  render() {
    return (
      //form displayed
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
