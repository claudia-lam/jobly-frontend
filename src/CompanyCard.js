import "./CompanyCard.css";
import { Link } from "react-router-dom";


/** Individual card for a company
 *
 * Props:
 *  - company: company object
 *             { handle, name, description, numEmployees, logoUrl }
 *
 * State:
 *  - none
 *
 * App --> RoutesList --> CompanyList --> CompanyCard
 */
function CompanyCard({ company }) {
  const { name, handle, description, logoUrl } = company;

  return (
    <Link className="CompanyCard-Link" to={`/companies/${handle}`}>
      <div className="CompanyCard">
        {logoUrl && <img src={`.${logoUrl}`} alt={`logo of ${name}`} />}
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}


export default CompanyCard;
