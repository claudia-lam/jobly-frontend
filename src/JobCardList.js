import JobCard from './JobCard';


/** List of jobs
 *
 * Props:
 *  - company: company object
 *  {description, handle, jobs:[...], logoUrl, name, numEmployees}
 *
 * State:
 *  - none
 *
 * App --> RoutesList --> [CompanyDetail, JobList] --> JobCardList
 */
function JobCardList({ jobs }) {
  return (
    <div className='JobCardList'>
      {jobs.map(j => <JobCard key={j.id} job={j} />)}
    </div>
  );
}


export default JobCardList;