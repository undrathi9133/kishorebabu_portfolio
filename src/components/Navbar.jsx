import React from 'react'
import collegeLogo from '../assets/kmit_logo.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/"><img src={collegeLogo} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/publications">Publications</a></li>
            <li className="nav-item"><a className="nav-link" href="/students">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="/activities">Activities</a></li>
            <li className="nav-item"><a className="nav-link" href="/experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="/skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="/certificates">Certificates</a></li>
            <li className="nav-item"><a className="nav-link" href="/talks">Talks</a></li>
            <li className="nav-item"><a className="nav-link" href="/teaching">Teaching</a></li>            
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar