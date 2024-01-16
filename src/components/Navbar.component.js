import React, {useRef} from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaFan } from "react-icons/fa";

const NavbarComponent = () => {

  const BtnToggleref = useRef();

  const toggleMenu = () => {

    if(window.innerWidth < 992 )
      BtnToggleref.current.click();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <FaFan className="navbar-logo-icon" />
          <span className= "navbar-logo-text">Hill & Knowlton </span>
          
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref= {BtnToggleref}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Wisdom-hub" onClick={toggleMenu}>
                WisdomHub
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff-biographies" onClick={toggleMenu}>
                H&k Directory
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emails" onClick={toggleMenu}>
                Emails
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About-Us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
