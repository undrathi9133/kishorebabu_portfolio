import React from 'react';
import { Link } from 'react-router-dom';
import collegeLogo from '../assets/kmit_logo.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Use Link instead of <a> for SPA routing */}
        <Link className="navbar-brand" to="/">
          <img src={collegeLogo} alt="College Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/publications">Publications</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/experience">Experience</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/certificates">Certificates</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/talks">Talks</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teaching">Teaching</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
