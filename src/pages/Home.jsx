import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"


const Home = () => {
  return (
    <>
      <Container className="justify-content-center">

        <Container>
          <Row>
            <Col>
              <h1>home page</h1>
              <img src="/server-rack.jpg" width="100%" />
            </Col>
          </Row>

        </Container>

        <Container className="text-center">
          <Row>
            <Col>
              <h1>
                YOUR PARTNER IS RELIABLE SCALEBLE GOSTING SOLUTIONSSSSSS
              </h1>
            </Col>
          </Row>

          <Row className="justify-content-center ">
            <Col md={4}>
              <p>
                At cloud nexus we provide cutting edge hosting services designed to empower buisnines and inviduals
                to succeed in a fast-paced digtal world. Whatever you're launching a startup a managing a growing enterprise
              </p>
            </Col>
            <Col md={3}>
              <img src="/computer-monitor-in-datacenter.jpg" width="300px"></img>
            </Col>
          </Row>
        </Container>

        <Container className="py-5 text-center bg-light">
          <Row>
            <Col className="py-5">
              <h2>Why choose cloud nexes</h2>
            </Col>
          </Row>
          <Row md={4} className="justify-content-center">
            <Col className="justify-content-center">
              <h2>expert support</h2>
              <p>dfsdfsdafsafsadfdasf</p>
            </Col>
            <Col>
              <h2>twoooo</h2>
              <p>dfsdfsdafsafsadfdasf</p>
            </Col>
            <Col>
              <h2>treee</h2>
              <p>dfsdfsdafsafsadfdasf</p>
            </Col>
          </Row>
          <Row md={4} className="py-5 text-center justify-content-center bg-light">
            <Col className="justify-content-center" >
              <h2>one</h2>
              <p>asdasd</p>
            </Col>
            <Col>
              <h2>tow</h2>
              <p>dsfgdsafgsahjfgsdahjfgshajfgsadhjfgdsahkjfgdhsajfgas</p>
            </Col>
          </Row>
          <Row className="text-center bg-light">
            <Col>
              <button>Get Started Today</button>
            </Col>
          </Row>
        </Container>
        <Container>

          <Row >
            <Col>
            <h1>a Hosting partener you can trust(not)</h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src="/server-rack.jpg" width="150px"></img>
            </Col>
          </Row>
        </Container>

      </Container>



    </>
  );
};

export default Home;