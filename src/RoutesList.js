import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

/** Routes to all components
 *
 * Props: none
 *
 * State: none
 *
 * App --> RoutesList
 *
 */
function RoutesList() {
  // TODO: add navigate to : *
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:company" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
