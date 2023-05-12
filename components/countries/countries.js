//NEXT COMPONENTS
import Image from "next/image";
//COMPONENTS
import SearchFilter from "../../components/countries/search-filter";
//HOOKS
import React, { useState, useEffect } from "react";

export default function Countries({
  countriesData,
  handleCountryData,
  countryCodes,
}) {
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
  //Also collect country codes.
  useEffect(() => {
    const uniqueRegions = new Set();
    let countryCodesData = {};

    countriesData.forEach((country) => {
      if (country.region && !uniqueRegions.has(country.region)) {
        uniqueRegions.add(country.region);
      }
      //Not sure on the correct country code to use here.
      //Fifa seems to have the most correct countrycodes but cca3 has the largest length.
      // .fifa/.cioc/.cca3
      countryCodesData[country.cca3] = country.name.common;
    });
    setRegions(Array.from(uniqueRegions));
    countryCodes(countryCodesData);
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
            <button
              className="country-link rounded-1 text-decoration-none p-0 text-start"
              key={country.name.common ? country.name.common : None}
              onClick={() => handleCountryData(country)}
            >
              <article className="country-container">
                <Image
                  className="country-flag rounded-top"
                  src={country.flags.svg ? country.flags.svg : ""}
                  width={264}
                  height={160}
                  alt={
                    country.name.common
                      ? country.name.common + " Flag"
                      : "Flag image"
                  }
                />
                <div className="text-container p-4">
                  <h2>{country.name.common ? country.name.common : "None"}</h2>
                  <ul className="p-0">
                    <li>
                      <strong>Population:</strong>{" "}
                      {country.population
                        ? country.population.toLocaleString()
                        : "None"}
                    </li>
                    <li>
                      <strong>Region:</strong>{" "}
                      {country.region ? country.region : "None"}
                    </li>
                    <li>
                      <strong>Capital:</strong>{" "}
                      {country.capital && Array.isArray(country.capital)
                        ? country.capital.map(
                            (city, index) => (index > 0 && ", ", city)
                          )
                        : "None"}
                    </li>
                  </ul>
                </div>
              </article>
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
