export default function SearchFilter({ regions, regionClick, searchType }) {
  return (
    <section className="search-filter-container my-4">
      <div className="search-filter-content d-flex justify-content-between align-items-center flex-wrap gap-2">
        <label
          htmlFor="search-country"
          className="m-0 px-4 py-3 d-flex flex-row rounded-1 align-items-center"
        >
          <i className="bi bi-search mx-2"></i>
          <input
            type="text"
            className="form-control p-0"
            id="search-country"
            placeholder="Search for a country..."
            onChange={searchType}
          ></input>
        </label>

        <div className="region-dropdown m-0 rounded-1">
          <button
            className="btn dropdown-toggle px-4 py-3"
            id="region-dropdown-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter By Region
          </button>

          <ul
            className="dropdown-menu"
            id="region-menu"
            aria-labelledby="region-dropdown-btn"
          >
            <li>
                <button
                  className="dropdown-item px-4"
                  onClick={() => regionClick("all")}
                >
                  All
                </button>
              </li>
            {regions.map((region) => (
              <li key={region}>
                <button
                  className="dropdown-item px-4"
                  onClick={() => regionClick(region)}
                >
                  {region}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
