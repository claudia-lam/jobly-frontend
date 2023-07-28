import { useState } from "react";


/** Search Form
 *
 * Props:
 *  - filter: parent function to call
 *
 * State:
 *  - searchTerm: user input
 *
 * App --> RoutesList --> [CompanyList, JobList] --> SearchForm
 */
function SearchForm({ filter }) {
  const [searchTerm, setSearchTerm] = useState("");

  /**  Update search term */
  function handleChange(evt) {
    const input = evt.target.value;
    setSearchTerm(input);
  }

  /** Call parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    filter(searchTerm);
  }

  return (
    <div className="SearchForm mb-4">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-0">
          <div className="col-8">
            <input
              className="form-control form-control-lg"
              name="search"
              placeholder="Enter search term"
              onChange={handleChange}
              value={searchTerm}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default SearchForm;
