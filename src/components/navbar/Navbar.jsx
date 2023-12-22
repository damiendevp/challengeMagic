import React, { useRef } from "react"
import "./Navbar.css"

const Navbar = () => {
  const aboutRef = useRef(null)

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <a className="nav-link active" href="#header">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" onClick={scrollToAbout}>
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  )
}

export default Navbar
