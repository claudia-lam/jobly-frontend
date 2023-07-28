import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/** List of all jobs
 *
 * Props:
 *  - none
 *
 * State:
 * - jobs: object containing jobs data,
 *           isLoading and errors
 *
 *        {
 *          data: [{j1},...],
 *          isLoading: bool,
 *          errors: null
 *        }
 *
 * App --> RoutesList --> JobList --> [SearchForm, JobCardList]
 */
function JobList() {
  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true,
    errors: false,
  });

  useEffect(function getJobsWhenMounted() {
    async function getJobs() {
      try {
        const res = await JoblyApi.getJobs();
        setJobs({
          data: res,
          isLoading: false,
          errors: false,
        });
      } catch (err) {
        setJobs({
          data: null,
          isLoading: true,
          errors: err,
        });
      }
    }
    getJobs();
  }, []);

  async function getFilteredJobs(searchTerm) {
    if (!searchTerm.trim()) {
      const res = await JoblyApi.getJobs();
      setJobs({
        data: res,
        isLoading: false,
        errors: false,
      });
    } else {
      try {
        const res = await JoblyApi.getFilteredJobs(searchTerm);
        setJobs({
          data: res,
          isLoading: false,
          errors: false,
        });
      } catch (err) {
        setJobs({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
  }

  const { isLoading, errors } = jobs;

  if (isLoading) return <p>Loading...</p>;
  if (errors) return <p>Errors: {errors}</p>;

  const allJobs = jobs.data.jobs;

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm filter={getFilteredJobs} />
      {!allJobs.length && <p className="lead">Sorry, no results were found!</p>}
      <JobCardList jobs={allJobs} />
    </div>
  );
}

export default JobList;
