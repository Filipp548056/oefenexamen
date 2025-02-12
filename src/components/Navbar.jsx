import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-nav.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" style={{ maxWidth: "50px", marginRight: "10px" }} />
          <p className="fw-bold mb-0">QuantomSky Solutions</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/solutions">Solutions</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;