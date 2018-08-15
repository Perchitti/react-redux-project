import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to ScoutMoney International</h2>
          <p>Where it's a dog eat dog kind of world</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/codingcomputer.jpg" circle className="profile-pic" />
            <h3>Lauren</h3>
            <p>
              Go out on a limb - that's where the fruit is. This is where you
              take out all your hostilities and frustrations. It's better than
              kicking the puppy dog around and all that so. Isn't that fantastic
              that you can create an almighty tree that fast? This present
              moment is perfect simply due to the fact you're experiencing it.
              Volunteering your time; it pays you and your whole community
              fantastic dividends. Life is too short to be alone, too precious.
              Share it with a friend.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/codingcomputer.jpg" circle className="profile-pic" />
            <h3>Lily</h3>
            <p>
              Use what you see, don't plan it. Now let's put some happy little
              clouds in here. How to paint. That's easy. What to paint. That's
              much harder. There is no right or wrong - as long as it makes you
              happy and doesn't hurt anyone. Let's make some happy little clouds
              in our world. That's what makes life fun. That you can make these
              decisions. That you can create the world that you want.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/codingcomputer.jpg" circle className="profile-pic" />
            <h3>Scout</h3>
            <p>
              If you don't like it - change it. It's your world. And that's when
              it becomes fun - you don't have to spend your time thinking about
              what's happening - you just let it happen. We tell people
              sometimes: we're like drug dealers, come into town and get
              everybody absolutely addicted to painting. It doesn't take much to
              get you addicted. You want your tree to have some character. Make
              it special. Work that paint. Just make little strokes like that.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
