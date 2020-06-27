import React from 'react'
import logo  from '../../logo.svg';
import './navbar.scss'
const  Navbar =() =>  {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={logo} alt="Logo Page" />
          <ul className="nav-links">
            <li>
              <a href="/" className="nav-link">Home</a>
            </li>
            <li>
              <a href="/" className="nav-link">About</a>
            </li>
            <li>
              <a href="/" className="nav-link active">Tours</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
