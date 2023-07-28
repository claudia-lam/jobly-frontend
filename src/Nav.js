import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

/** navigation menu
 *
 * props: none
 *
 * state: none
 *
 * App -> Nav
 *
 */
function Nav({ isLoggedIn }) {
  return (
    <nav className="Nav navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Jobly</NavLink>
        {isLoggedIn ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink to="/companies">Companies</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/">Logout</NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
