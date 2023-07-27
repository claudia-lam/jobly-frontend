import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

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
  // TODO: NavLink better for styling
  return (
    <nav className="Nav navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Jobly</Link>
        {isLoggedIn ? (
          <>
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
