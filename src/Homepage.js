import { useContext } from "react";
import "./Homepage.css";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/** Homepage
 *
 * Props: none
 *
 * State: none
 *
 * App --> RoutesList --> Homepage
 */
function Homepage() {
  const { firstName, isLoggedIn } = useContext(userContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h3 className="mb-4 fw-bold">Jobly</h3>
        <p className="lead">All the jobs in one, convenient place.</p>
        {!isLoggedIn ? (
          <div>
            <Link className="btn btn-primary fw-bold me-3" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary fw-bold me-3" to="/signup">
              Sign Up
            </Link>
          </div>
        ) : (
          <h4>{`Welcome Back, ${firstName}!`}</h4>
        )}
      </div>
    </div>
  );
}

export default Homepage;
