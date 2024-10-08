import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'
export default class Abovenav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary w-100 text-">
          <div className="container-fluid d-flex justify-content-between align-items-center px-3 px-md-5">
            {/* Logo section */}
            
            <NavLink className="nav-link navbar-brand text-muted hover-black" to="/home" activeclassname="active"><img src="/logo.png" className="logo" alt="Logo" /></NavLink>
            

            
            {/* Account button (will stack vertically on smaller screens) */}
            <form className="d-flex align-items-center">
              <button className="btn" type="button">
                <NavLink to="/signup"><i className="material-icons loginbtnicon">account_circle</i></NavLink>
                
              </button>
             
                
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
