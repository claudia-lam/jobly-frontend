import JobCard from "./JobCard";


/** List of jobs
 *
 * Props:
 *  - jobs: array of job objects
 *
 *    [ {id, title, salary, equity}, ... ]
 *
 * State:
 *  - none
 *
 * App --> RoutesList --> [CompanyDetail, JobList] --> JobCardList
 */
function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  );
}


export default JobCardList;
