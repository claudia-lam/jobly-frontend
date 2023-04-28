import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Nav from "./Nav";
import JoblyApi from "./api";

/** Controls the entire app
 *
 * Props:
 *  - none
 *
 * State:
 *  - user: Object containing the keys data, isLoading and errors
 *          {data: [{c1},...],
 *           isLoading: bool,
 *           errors: null}
 *  - token:
 *
 * App -> [Nav, RoutesList]
 *
 */
function App() {
  const [user, setUser] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const [token, setToken] = useState({
    token: null,
    username: null,
    isLoading: true,
    errors: null,
  });

  useEffect(
    function getUserOnTokenChange() {
      async function getUser() {
        try {
          const res = await JoblyApi.getUser(token.username);
          setUser({
            data: res.user,
            isLoading: false,
            errors: null,
          });
        } catch (err) {
          setUser({
            data: null,
            isLoading: false,
            errors: err,
          });
        }
      }
      getUser();
    },
    [token]
  );

  /** get token from API and sets token in state
   *
   * takes in:
   *  - username
   *  - password
   *
   * throws error if unauthorized
   */

  async function getToken(username, password) {
    try {
      const token = await JoblyApi.getToken(username, password);
      setToken({
        token: token,
        username: username,
        isLoading: false,
        errors: null,
      });
    } catch (err) {
      setToken({
        token: null,
        isLoading: false,
        errors: err,
      });
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList login={getToken} />
      </BrowserRouter>
    </div>
  );
}

export default App;
