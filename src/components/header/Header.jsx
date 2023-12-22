import React from "react"
import Navbar from "../navbar/Navbar"
import SocialLinks from "../social-links/SocialLinks"
import "./Header.css"

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <h1>Gamarjobat</h1>

        <h2>Qui a dit que la magie n'existait pas dans le monde réel ?</h2>

        <Navbar />
        <SocialLinks />
      </div>
    </header>
  )
}

export default Header
