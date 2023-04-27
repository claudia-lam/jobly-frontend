import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/** List of all jobs
 *
 * Props: none
 *
 * State:
 * - jobs: array of objects containing the keys data,
 *             isLoading and errors
 *      [
 *        {data: [{j1},...],
 *        isLoading: bool,
 *        errors: null}
 *      ]
 *
 * App --> RoutesList --> JobList --> [SearchForm, JobCardList]
 */
function JobList() {
  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true,
    errors: false,
  });

  console.log("jobs - in JobList", jobs);

  useEffect(function getJobsWhenMounted() {
    async function getJobs() {
      try {
        const res = await JoblyApi.getJobs();
        setJobs({
          data: res,
          isLoading: false,
          errors: false,
        });
        console.log("res", res);
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
    try {
      const res = await JoblyApi.getFilteredJobs(searchTerm);
      setJobs({
        data: res,
        isLoading: false,
        errors: false,
      });
      console.log("res", res);
    } catch (err) {
      setJobs({
        data: null,
        isLoading: true,
        errors: err,
      });
    }
  }

  const { isLoading, errors } = jobs;
  if (isLoading) return <p>Loading...</p>;
  if (errors) return <p>Errors: {errors}</p>;

  return (
    <div className="JobList">
      <SearchForm filter={getFilteredJobs} />
      {jobs.data.jobs.length === 0 && <p>Sorry, no results were found!</p>}
      <JobCardList jobs={jobs.data.jobs} />
    </div>
  );
}

export default JobList;
