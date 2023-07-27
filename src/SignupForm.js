import { useState } from "react";
import Alert from "./Alert";

/**
 * form for signing up a user
 *
 * Props:
 * - signUp
 *
 * State:
 * - formData
 *
 * RoutesList --> SignupForm --> Alert
 *
 */

const SIGNUP_INITIAL_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

function SignupForm({ signUp, errors }) {
  const [formData, setFormData] = useState(SIGNUP_INITIAL_DATA);

  /** Update Signup **/
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
    signUp(formData);
    // setFormData({ username: "", password: "" });
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Sign Up</h2>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label forhtml="username">Username</label>
              <input
                id="username"
                name="username"
                className="form-control"
                onChange={handleChange}
                value={formData.username}
              />
              <div className="mb-3">
                <label forhtml="password">Password</label>
                <input
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <div className="mb-3">
                <label forhtml="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
              <div className="mb-3">
                <label forhtml="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
              <div className="mb-3">
                <label forhtml="email">Email</label>
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              {errors && <Alert errors={errors} />}
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
