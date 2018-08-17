import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import Posts from "./Posts";
import PostForm from "./PostForm";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/backgroundheadboard.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/codingcomputer.jpg"
              className="about-profile-pic"
            />
            <h3>Fun Quotes</h3>
            <p>
              Don't fight it, use what happens. Now it's beginning to make a
              little sense. It's amazing what you can do with a little love in
              your heart. Everything's not great in life, but we can still find
              beauty in it.
            </p>
            <p>
              If you've been in Alaska less than a year you're a Cheechako. Here
              we're limited by the time we have. Use your imagination, let it
              go. Just think about these things in your mind and drop em' on
              canvas. We start with a vision in our heart, and we put it on
              canvas. Everyone wants to enjoy the good parts - but you have to
              build the framework first. You need the dark in order to show the
              light. We'll put some happy little leaves here and there. This is
              unplanned it really just happens.
            </p>
          </Col>
          <Col cs={12} sm={9}>
            <PostForm />
            <Posts />
          </Col>
        </Grid>
      </div>
    );
  }
}
