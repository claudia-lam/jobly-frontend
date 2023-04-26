import { useState } from "react";

/** Search Form
 *
 * Props:
 *  -
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
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input"
        name="search"
        placeholder="Enter search term"
        onChange={handleChange}
        value={searchTerm}
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;
