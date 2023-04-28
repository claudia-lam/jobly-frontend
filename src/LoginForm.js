import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Alert from './Alert';
import userContext from './userContext';


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

  const navigate = useNavigate();
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

  if (isLoggedIn) navigate('/');

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label forhtml="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        value={formData.username}
      />
      <label forhtml="password">password</label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      {errors && <Alert errors={errors} />}
      <button>Log In</button>
    </form>
  );
}

export default LoginForm;
