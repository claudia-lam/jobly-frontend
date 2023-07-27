import { useState, useContext } from "react";
import Alert from "./Alert";
import userContext from "./userContext";

/**
 * form for logging in user
 *
 * Props:
 * - login
 *
 * State:
 * - formData
 *
 * RoutesList --> LoginForm --> Alert
 *
 */

function LoginForm({ login, errors }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { isLoggedIn } = useContext(userContext);

  /** Update login */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    const { username, password } = formData;
    login(username, password);
    setFormData({ username: "", password: "" });
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3">Log In</h3>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label" forhtml="username">Username</label>
              <input
                id="username"
                name="username"
                className="form-control"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" forhtml="password">Password</label>
              <input
                id="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={formData.password}
              />
            </div >
            {errors && <Alert errors={errors} />}
            <div className="d-grid">
              <button className="btn btn-primary">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
