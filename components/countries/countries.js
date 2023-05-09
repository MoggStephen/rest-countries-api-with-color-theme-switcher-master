//NEXT COMPONENTS
import Image from "next/image";
//COMPONENTS
import SearchFilter from "../../components/countries/search-filter";
//HOOKS
import React, { useState, useEffect } from "react";

export default function Countries({countriesData}) {
  const [countries, setCountries] = useState(countriesData || []); //Check the countriesData is truthy before setting it.
  const [regions, setRegions] = useState([]);

  //HANDLE SEARCH TYPE
  const handleSearchType = (event) => {
    const text = event.target.value;
    const newData = [];
    countriesData.map((country) => {
      if (country.name.common.toLowerCase().includes(text.toLowerCase())) {
        newData.push(country);
      }
    });
    setCountries(newData);
  };
  //HANDLE REGION CLICK
  const handleRegionClick = (region) => {
    const regionBtn = document.getElementById("region-dropdown-btn");

    if (region === "all") {
      setCountries(countriesData);
      regionBtn.textContent = "Filter By Region";
    } else {
      regionBtn.textContent = region;
      const newData = [];
      countriesData.map((country) => {
        if (country.region === region) {
          newData.push(country);
        }
      });
      setCountries(newData);
    }
  };
  //Get the available regions in the countriesData.
  useEffect(() => {
    const uniqueRegions = new Set();

    countriesData.forEach((country) => {
      if (country.region && !uniqueRegions.has(country.region)) {
        uniqueRegions.add(country.region);
      }
    });

    setRegions(Array.from(uniqueRegions));
  }, []);

  return (
    <>
      {/* SEARCH FILTER SECTION */}
      <SearchFilter
        regions={regions}
        regionClick={handleRegionClick}
        searchType={handleSearchType}
      />

      {/* COUNTRIES SECTION */}
      <main className="countries-container">
        <div className="countries-content">
          {countries.map((country) => (
            // Country
            <a
              className="country-link rounded-1 text-decoration-none"
              key={country.name.common}
            >
              <article className="country-container p">
                <Image
                  className="country-flag rounded-top"
                  src={country.flags.svg}
                  width={264}
                  height={160}
                  alt={country.name.common + " Flag"}
                />
                <div className="text-container p-4">
                  <h2>{country.name.common}</h2>
                  <ul className="p-0">
                    <li>
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString()}
                    </li>
                    <li>
                      <strong>Region:</strong> {country.region}
                    </li>
                    <li>
                      <strong>Capital:</strong> {country.capital}
                    </li>
                  </ul>
                </div>
              </article>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
