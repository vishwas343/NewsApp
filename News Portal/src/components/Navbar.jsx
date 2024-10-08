import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="card text-center  navbar-expand-lg bg-body-secondary position-relative">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs me-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/home" activeclassname="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/politics" activeclassname="active">Politics</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/business" activeclassname="active">Business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/entertainment" activeclassname="active">Entertainment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/sports" activeclassname="active">Sports</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/science" activeclassname="active">Science</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/technology" activeclassname="active">Technology</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-muted hover-black" to="/health" activeclassname="active">Health</NavLink>
              </li>
            </ul>
          </div>
          
        </nav>

      </div>
    )
  }
}
