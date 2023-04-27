import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

/** Detail about a company
 *
 * Props:
 *  - none
 *
 * State:
 *   - company: an object containing company data,
 *                 isLoading and errors
 *
 *        {data: {c1},
 *        isLoading: bool,
 *        errors: null}
 *
 * App --> RoutesList --> CompanyDetail --> JobCardList
 */
function CompanyDetail() {
  const { company } = useParams();

  const [companyData, setCompanyData] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  useEffect(
    function getCompanyOnChange() {
      async function getCompany() {
        try {
          const res = await JoblyApi.getCompany(company);

          setCompanyData({
            data: res,
            isLoading: false,
            errors: null,
          });
        } catch (err) {
          setCompanyData({
            data: null,
            isLoading: false,
            errors: err,
          });
        }
      }
      getCompany();
    },
    [company]
  );

  const { isLoading, errors } = companyData;

  if (isLoading) return <p>Loading...</p>;
  if (errors) return <p>Errors: {errors}</p>; // TODO: display error page instead of showing error

  const { name, description, jobs } = companyData.data;

  return (
    <div className="CompanyDetail">
      <h2>{name}</h2>
      <p>{description}</p>
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;
