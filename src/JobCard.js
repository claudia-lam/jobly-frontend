/** Job card
 *
 * Props:
 *  - job: job object {id, title, salary, equity}
 *
 * State:
 *  - none
 *
 * App --> RoutesList --> [CompanyDetail, JobList] --> JobCardList --> JobCard
 */
function JobCard({ job }) {
  const { title, salary, equity, companyName } = job;

  return (
    <div className="JobCard">
      <h4>{title}</h4>
      {companyName && <p>{companyName}</p>}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;
