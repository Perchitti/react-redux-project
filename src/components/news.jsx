import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./news.css";

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/headerwebsite1.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>
                A thin paint will stick to a thick paint. Let's put some happy
                trees and bushes back in here. We don't make mistakes we just
                have happy little accidents. It's almost like something out of a
                fairytale book. Use absolutely no pressure. Just like an angel's
                wing. It's so important to do something every day that will make
                you happy.
              </p>
              <p>
                Be brave. You have to make those little noises or it won't work.
                I really believe that if you practice enough you could paint the
                'Mona Lisa' with a two-inch brush. Nothing's gonna make your
                husband or wife madder than coming home and having a
                snow-covered dinner.
              </p>
              <p>
                Just take out whatever you don't want. It'll change your entire
                perspective. You can get away with a lot. Let's do that again.
                If you overwork it you become a cloud killer. There's nothing
                worse than a cloud killer. This painting comes right out of your
                heart.
              </p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
            <Image src="assets/codingcomputer.jpg" />
            <p>Isn't that fantastic that you can create an almighty tree that fast? This is unplanned it really just happens. We'll take a little bit of Van Dyke Brown. You have to make almighty decisions when you're the creator. Just make little strokes like that. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
