import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/** Detail about a company
 *
 * Props: none
 *
 * State:
 *   - company: an object containing the keys data,
 *                 isLoading and errors
 *
 *        {data: {c1},
 *        isLoading: bool,
 *        errors: null}
 *
 *
 * App --> RoutesList --> CompanyDetail --> JobCardList
 */
function CompanyDetail() {
  const { company } = useParams();
  console.log("companyHandle-in CO DETAILS", company);

  const [companyData, setCompanyData] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  console.log("companyData - CO DETAILS", companyData);

  useEffect(
    function getCompanyWhenMount() {
      async function getCompany() {
        try {
          const c = await JoblyApi.getCompany(company);
          setCompanyData({
            data: c,
            isLoading: false,
            errors: null,
          });
        } catch (err) {
          setCompanyData({
            data: null,
            isLoading: true,
            errors: err,
          });
        }
      }
      getCompany();
    },
    [company]
  );

  return <p>Company detail</p>;
}

export default CompanyDetail;
