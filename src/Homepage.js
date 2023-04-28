import { useContext } from "react";
import userContext from './userContext';

/** Homepage
 *
 * Props: none
 *
 * State: none
 *
 * App --> RoutesList --> Homepage
 */
function Homepage() {
  const { firstName } = useContext(userContext);

  return (
    <div className='Homepage'>
      <h3>Jobly</h3>
      <p>All the jobs in one, convenient place.</p>
      <h4>{`Welcome Back, ${firstName}!`}</h4>
    </div>
  )
}

export default Homepage;
