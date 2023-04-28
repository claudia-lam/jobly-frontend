import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Nav from "./Nav";
import JoblyApi from "./api";
import userContext from './userContext';

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
 */
function App() {
  const [user, setUser] = useState({
    data: null,
    isLoggedIn: false,
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
            isLoggedIn: true,
            isLoading: false,
            errors: null,
          });
        } catch (err) {
          setUser({
            data: null,
            isLoggedIn: false,
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
    <userContext.Provider
      value={{
        isLoggedIn: user.isLoggedIn,
        firstName: user.data?.firstName,
        userName: user.data?.username
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Nav />
          <RoutesList login={getToken} loginErrors={token.errors} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
