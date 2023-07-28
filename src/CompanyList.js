import { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

/** List of all companies
 *
 * Props:
 *  - none
 *
 * State:
 *  - companies: Object containing the keys data,
 *               isLoading and errors
 *
 *       {data: [{c1},...],
 *       isLoading: bool,
 *       errors: null}
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
        setCompanies({
          data: companies,
          isLoading: false,
          errors: null,
        });
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

  /** filterCompanies: gets filteredCompanies
   *
   * takes in search term: "abc"
   *
   * if no search term, state is set to full company list
   *
   * sets the state of the companies or sets state to errors
   */
  async function filterCompanies(searchTerm) {
    if (!searchTerm.trim()) {
      const allCompanies = await JoblyApi.getCompanies();
      setCompanies({
        data: allCompanies,
        isLoading: false,
        errors: null,
      });
    } else {
      try {
        const filteredCompanies = await JoblyApi.getFilteredCompanies(
          searchTerm
        );

        setCompanies({
          data: filteredCompanies,
          isLoading: false,
          errors: null,
        });
      } catch (err) {
        setCompanies({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
  }

  const { isLoading, errors } = companies;

  if (isLoading) return <p>Loading...</p>;
  if (errors) return <p>Errors: {errors}</p>;

  const companiesData = companies.data.companies;

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm filter={filterCompanies} />
      {!companiesData.length && <p>Sorry, no results were found!</p>}
      <div className="CompanyList-list">
        {companiesData.map((c) => {
          return <CompanyCard company={c} key={c.handle} />; // TODO: be more explicit of what you're passing down as props.
        })}
      </div>
    </div>
  );
}

export default CompanyList;
