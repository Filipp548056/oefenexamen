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

      <Container className="text-center">
        <Row>
          <Col>
            <h1>
              YOUR PARTNER IS RELIABLE SCALEBLE GOSTING SOLUTIONSSSSSS
            </h1>
          </Col>
        </Row>

        <Row>
          <Col width="100px">
            <p width="100px">
              asdsadsasadsaddbdfhjshsahfjdshfjkahfjkshfdskjfh
              sdafhdsafjkdshfjkhsfjsahfjdsahfkjdshfkjdshfksdjahf
              dsfgdsafgsahjfgsdahjfgshajfgsadhjfgdsahkjfgdhsajfgas
              fsadfdsafdsafsdfsdfafdsafsafsafdsafdsafsafdsfdsfsdfsdfsd
            </p>
          </Col>
          <Col>
            <img src="/computer-monitor-in-datacenter.jpg" width="300px"></img>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 text-center bg-light">
        <Row>
          <Col>
            <h2>LIghtying fast ndfds</h2>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto">
            <Row className="justify-content-center">
              <h2>expert support</h2>
              <p>dfsdfsdafsafsadfdasf</p>
            </Row>
          </Col>
          <Col>
            <h2>Scable solutions</h2>
            <p>dfsdfsdafsafsadfdasf</p>
          </Col>
          <Col>
            <h2>asdsad</h2>
            <p>dfsdfsdafsafsadfdasf</p>
          </Col>
        </Row>
        <Row className="py-5 text-center bg-light">
        <Col className="width: 500px" >
        <h2>sadsadsa</h2>
        <p>asdasd</p>
        </Col>
        <Col>
        <h2>sadsad</h2>
        <p>dsfgdsafgsahjfgsdahjfgshajfgsadhjfgdsahkjfgdhsajfgas</p>
        </Col>
        </Row>
        <Row className="py-5 text-center bg-light">
          <Col>
          <button>Get Started Today</button>
          </Col>


        </Row>
      </Container>



    </>
  );
};

export default Home;