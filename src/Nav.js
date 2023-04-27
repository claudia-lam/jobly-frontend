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
function Nav() {    // TODO: NavLink better for styling
  return (
    <div className="Nav">
      <Link to="/">Jobly</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
  );
}

export default Nav;
