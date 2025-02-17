import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"


const Home = () => {
  return (
    <>
      <Container >

       <Container id="banner" className="d-flex flex-column justify-content-center text-center">
          <Row >
            <Col md={8} className="mx-auto">
              <h1>Welcome to Cloud Nexus</h1>
            </Col>
          </Row>
        </Container>
        <Container className="text-center">
          <Row >
            <Col>
              <h1>YOUR PARTNER IS RELIABLE SCALEBLE GOSTING SOLUTIONSSSSSS</h1>
            </Col>
          </Row>

          <Row className="justify-content-center p-5">
            <Col md={4}>
              <p>
                At cloud nexus we provide cutting edge hosting services designed to empower buisnines and inviduals
                to succeed in a fast-paced digtal world. Whatever you're launching a startup a managing a growing enterprise
              </p>
            </Col>
            <Col md={3} >
              <img src="/computer-monitor-in-datacenter.jpg" className="border" width="250px"></img>
            </Col>
          </Row>
        </Container>

        <Container className="py-5 text-center bg-Lightblue">
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
          <Row md={4} className="py-5 text-center justify-content-center">
            <Col className="justify-content-center" >
              <h2>one</h2>
              <p>asdasd</p>
            </Col>
            <Col>
              <h2>tow</h2>
              <p>dsfgdsafgsahjfgsdahjfgshajfgsadhjfgdsahkjfgdhsajfgas</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <button className="bg-blue">Get Started Today</button>
            </Col>
          </Row>
        </Container>
        <Container className="justify-content-center text-center p-4 bg-light">
          <Row >
            <Col className="ms-2">
              <h3>A HOSTING YOU CAN TRUST(not)</h3>
            </Col>
          </Row>
          <Row className=" justify-content-center" >
            <Col md={5} className="justify-content-end d-flex">
              <img src="/harddisks-in-server.jpg" width="150px"></img>
            </Col>
            <Col md={5} className="d-flex text-start">
              <p>at cloud nexus we dont just provide hosting: we provide peace of mind.
                Our nission is to deliver
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
};

export default Home;