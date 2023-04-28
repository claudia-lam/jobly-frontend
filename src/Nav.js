import React from "react";
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
    <div className="Nav">
      <Link to="/">Jobly</Link>
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
  );
}

export default Nav;
