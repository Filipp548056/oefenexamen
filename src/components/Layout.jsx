import React from "react";
import { Link, Outlet, useLocation} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'



const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link>
          <div className="d-flex align-items-center">
            {/* <img src={favicon} alt="Logo-Nexus" style={{ maxWidth: "50px", marginRight: "10px" }} /> */}
          <p>Cloud Nexus</p>
          </div>
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <Nav className="navbar-nav ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Services">Services</Nav.Link>
              <Nav.Link href="/Pricing">Pricing</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </div>
        </div>
      </nav>
      <div id="App">
        <main>
          <outlet></outlet>
        </main>

        <footer className="container-fluid bg-dark text-white py-5 text-center">
          <img src="logo.png" style={{ width: "50px" }} />
          <h5>Nexus app</h5>
          <p>(c).</p>
        </footer>
      </div>
    </>

  );
};






export default Layout;
