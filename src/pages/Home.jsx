import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"


const Home = () => {
  return (
    <>
      
        <Container>
          <Row>
            <Col>
              <h1>home page</h1>
              <img src="/server-rack.jpg" width="100%" />
            </Col>
          </Row>
        </Container>

      

    </>
  );
};

export default Home;