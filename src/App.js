import "./App.css";
import { useState } from 'react';
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
 *  - user: FIXME:
 *
 * App -> [Nav, RoutesList]
 *
 */
function App() {
  const [user, setUser] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  /**
   *
   */
  async function getToken(username, password) {
    try {
      const token = await JoblyApi.getToken(username, password);

      console.log('token:', token);
    } catch(err) {
      console.log(err);
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
