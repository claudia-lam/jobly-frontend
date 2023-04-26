import { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from './SearchForm';


/** List of all companies
 *
 * Props: none
 *
 * State:
 *    - companies: Object containing the keys data,
 *                 isLoading and errors

 *        {data: [{c1},...],
 *        isLoading: bool,
 *        errors: null}
 *
 *
 * App --> RoutesList --> CompanyList --> [SearchForm, CompanyCard]
 */
function CompanyList() {
  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  useEffect(function loadCompaniesWhenMounted() {
    async function fetchCompanies() {
      try {
        const companies = await JoblyApi.getCompanies();
        setCompanies({ data: companies, isLoading: false, errors: null });
      } catch (err) {
        setCompanies({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
    fetchCompanies();
  }, []);


  /**  */
  async function filterCompanies(searchTerm) {
    try {
      const companies = await JoblyApi.getFilteredCompanies(searchTerm);
      setCompanies({
        data: companies,
        isLoading: false,
        errors: null
      });
    } catch (err) {
      setCompanies({
        data: null,
        isLoading: false,
        errors: err
      });
    }
  }

  const { isLoading, errors } = companies;

  if (isLoading) return <p>Loading...</p>;
  if (errors) return <p>Errors: {errors}</p>;

  const companiesData = companies.data.companies;

  return (
    <div className='CompanyList'>
      <SearchForm filter={filterCompanies} />
      {companiesData.map((c) => {
        return <CompanyCard company={c} key={c.handle} />;
      })}
    </div>
  );
}

export default CompanyList;
