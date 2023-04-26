/** List of all jobs
 *
 * Props: none
 *
 * State:
 * - jobs: array of objects containing the keys data,
 *                 isLoading and errors
 *      [
 *        {data: [{j1},...],
 *        isLoading: bool,
 *        errors: null}
 *      ]
 *
 * App --> RoutesList --> JobList --> [SearchForm, JobCardList]
 */
function JobList() {
  return <p>Job list</p>;
}

export default JobList;
