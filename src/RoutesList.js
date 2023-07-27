import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** Routes to all components
 *  FIXME:
 * Props: none
 *
 * State: none
 *
 * App --> RoutesList
 *
 */
function RoutesList({
  login,
  signUp,
  update,
  user,
  loginErrors,
  signUpErrors,
}) {
  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:company" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route
          path="/login"
          element={<LoginForm login={login} errors={loginErrors} />}
        />
        <Route
          path="/signup"
          element={<SignupForm signUp={signUp} errors={signUpErrors} />}
        />
        <Route
          path="/profile"
          element={<ProfileForm update={update} user={user} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
