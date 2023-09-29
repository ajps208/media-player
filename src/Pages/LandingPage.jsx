import React from "react";
import { Row, Col,Card } from "react-bootstrap";

function LandingPage() {
  return (
    <div>
      <Row className="mt-5 mb-5 align-items-center justify-content-between">
        <Col></Col>
        <Col lg={4}>
          <h3 className="mb-3">
            Welcome to <span className="text-warning">Video Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            consectetur voluptate itaque quo vitae, totam maiores similique
            obcaecati error iure blanditiis corporis nulla dolor ab repudiandae
            fugit modi illum esse.
          </p>
          <button className="btn btn-info mt-5 fw-bolder">Get Started</button>
        </Col>
        <Col> </Col>
        <Col className="ps-5" lg={6}>
          <img
            className="img-fluid ms-5 ps-5"
            src="http://31.media.tumblr.com/b819fbed9e56d77d6bb8a9481e01f87c/tumblr_nn6d2cXiz91unqky1o1_500.gif"
            alt=""
          />
        </Col>
      </Row>
      <div className="container d-flex flex-column mt-5 mb-5 align-items-center justify-content-between">
        <h3>Features</h3>
        <div className="cards d-flex w-100 mt-5  align-items-center justify-content-between">
          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/935eb232333287.567c4218b2bc6.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 " style={{ width: "22rem" }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/223661/screenshots/1718151/play-that-funky-music.gif" />
            <Card.Body>
              <Card.Title>Categories Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/91/66/5c/91665caa560bd7ed13833ddcae325954.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div  className="container d-flex  mt-5 mb-5 align-items-center justify-content-between p-5 w-100 border border-secondary rounded" >
        <div className="content">
          <h3 className="text-warning mb-5">Simple,Fast and Powerful</h3>
          <h6><span className="text-justify fs-5 fw-bolder">Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe exercitationem rem vel rerum, voluptatem beatae iure dolores commodi fugit blanditiis harum, quia ullam mollitia, sint nam ab placeat impedit veritatis!</h6>
          <h6 className="mt-4"><span className="text-justify fs-5 fw-bolder">Categories Videos</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe exercitationem rem vel rerum, voluptatem beatae iure dolores commodi fugit blanditiis harum, quia ullam mollitia, sint nam ab placeat impedit veritatis!</h6>
          <h6 className="mt-4"><span className="text-justify fs-5 fw-bolder">Managing History</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe exercitationem rem vel rerum, voluptatem beatae iure dolores commodi fugit blanditiis harum, quia ullam mollitia, sint nam ab placeat impedit veritatis!</h6>
        </div>
        <div className="video ms-5">
        <iframe width="589" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak?si=A68xPP3AN3mcBsSL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
