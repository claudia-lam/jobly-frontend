import './CompanyCard.css';


/** Individual card element for a company
 *
 * Props:
 *  - company: company object -
 *             { handle, name, description, numEmployees, logoUrl }
 *
 * State: none
 *
 * App --> RoutesList --> CompanyList --> CompanyCard
 */
function CompanyCard({ company }) {
  const { name, description, logoUrl } = company;

  return (
    <div className='CompanyCard'>
      {logoUrl && <img src={`.${logoUrl}`} alt={`logo of ${name}`} />}
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}


export default CompanyCard;
