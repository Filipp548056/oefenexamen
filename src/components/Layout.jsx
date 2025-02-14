import { Link, Outlet, useLocation } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="bg-body-tertiary justify-content-between">
          <Container className="container-fluid">
            <Navbar.Brand href="/">
              <img src="/favicon.png" className="me-2" height="48"></img>React Bootstrap
            </Navbar.Brand>
          </Container>
          <Container className="ms-1">
            <Nav className="ms-1">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Services">Services</Nav.Link>
              <Nav.Link href="/Pricing">Pricing</Nav.Link>
              <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Container>

        </Container>
      </Navbar>

      <div id="app">
        <main>
          <Outlet></Outlet>
        </main>
        <footer className="blockquote-footer">
          <Container>
            <Row>
              <Col md="4">
                <Link to="/">
                  <img src='/logo.png' height="100"></img>
                </Link>
              </Col>
              <Col md="4">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Contact">Contctactsasad</Nav.Link>
                <Nav.Link href="/AboutUs">About</Nav.Link>
                <Nav.Link href="/Pricing">Pricing</Nav.Link>
                <Nav.Link href="/Services">Services</Nav.Link>
              </Col>
              <Col>
                <p>Pellentesque id pulvinar odio. Curabitur vitae ornare orci. Aliquam erat volutpat. Morbi placerat
                  eugiat eros quis laoreet. Donec sit amet cursus diam. Duis odio urna,
                  laoreet facilisis eros ut, euismod consectetur neque. Sed rhoncus orci nec pretium accumsan.
                  Donec vitae felis luctus, consectetur quam eu, interdum sapien. Pellentesque id ante ultrices,
                  tincidunt nunc eget, sagittis diam.
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>

    </>

  );
};

export default Layout;
