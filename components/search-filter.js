export default function SearchFilter() {
  return (
  <section className="search-filter-container my-4">
    <div className="search-filter-content d-flex justify-content-between align-items-center flex-wrap gap-2">

      <label for="search-country" className="m-0 px-4 py-3 d-flex flex-row rounded-1 align-items-center">
        <i class="bi bi-search mx-2"></i>
        <input type="text" class="form-control p-0" id="search-country" placeholder="Search for a country..."></input>
      </label>

      <div class="region-dropdown m-0 rounded-1">

        <button class="btn dropdown-toggle px-4 py-3" id="region-dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
          Filter By Region
        </button>

        <ul class="dropdown-menu" id="region-menu" aria-labelledby="region-dropdown-btn">
          {/* GENERATED WITH ALL REGIONS */}
          <li><a class="dropdown-item px-4" href="#/">option1</a></li>
          <li><a class="dropdown-item px-4" href="#/">option2</a></li>
          <li><a class="dropdown-item px-4" href="#/">option3</a></li>
        </ul>

      </div>
    </div>  
  </section>
  );
}