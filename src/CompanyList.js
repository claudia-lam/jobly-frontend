/** List of all companies
 *
 * Props: none
 *
 * State:
 *    - companies: array of objects containing the keys data,
 *                 isLoading and errors
 *      [
 *        {data: [{c1},...],
 *        isLoading: bool,
 *        errors: null}
 *      ]
 *
 * App --> RoutesList --> CompanyList --> [SearchForm, CompanyCard]
 */
function CompanyList() {
  return <p>Company List</p>;
}

export default CompanyList;
