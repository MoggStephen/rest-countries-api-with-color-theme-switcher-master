import Image from "next/image";
//BOOTSTRAP ICONS
import "bootstrap-icons/font/bootstrap-icons.scss";

export default function Details({ data, codes, back }) {
  //Used as data sometimes doenst have a currency property. This causes an error and breaks website functionality.
  //We need to handle this case and return data not found!
  function checkProperty(data, property) {
    if (data.hasOwnProperty(property)) {
      return true;
    } else {
      return "Data not found";
    }
  }
  return (
    <>
      {
        <main className="country-details-container">
          <button className="back-btn btn my-5 ps-3 pe-4 " onClick={back}>
            <i class="bi bi-arrow-left"> </i>Back
          </button>

          <div className="country-details-content d-flex justify-content-between gap-5">
            <Image
              src={data.flags.svg}
              width={550}
              height={398}
              alt={data.name.common + " Flag"}
            />
            <div className="details-text-content d-flex flex-column justify-content-around">
              <h2 className="">{data.name.common}</h2>
              <div className="content-container d-flex gap-5 my-5">
                <ul className="content1">
                  <li>
                    <strong>Native Name:</strong>{" "}
                    {data.name && data.name.nativeName
                      ? Object.values(data.name.nativeName)[0].common
                      : "N/A"}
                  </li>
                  <li>
                    <strong>Population:</strong> {data.population}
                  </li>
                  <li>
                    <strong>Region:</strong> {data.region}
                  </li>
                  <li>
                    <strong>Sub Region:</strong> {data.subregion}
                  </li>
                  <li>
                    <strong>Capital:</strong>{" "}
                    {data.capital && Array.isArray(data.capital) ? (
                      data.capital.map((city, index) => (
                        <span key={city}>
                          {index > 0 && ", "}
                          {city}
                        </span>
                      ))
                    ) : (
                      <span>None</span>
                    )}
                  </li>
                </ul>
                <ul className="content2">
                  <li>
                    <strong>Top Level Domain:</strong> {data.tld}
                  </li>
                  <li>
                    {/* Loop through data, adding currencies with comma correctly */}
                    <strong>Currencies:</strong>{" "}
                    {data.currencies
                      ? Object.values(data.currencies)
                          .map((currencyData) => currencyData.name)
                          .join(", ")
                      : "None"}
                  </li>
                  <li>
                    <strong>Languages:</strong>{" "}
                    {Object.values(data.languages).join(", ")}
                  </li>
                </ul>
              </div>
              <div class="border-countries d-flex gap-2 flex-wrap">
                <strong>Border Countries: </strong>
                {data.borders
                  ? data.borders.map((borderCode) => (
                      <span className="border-country px-3" key={borderCode}>
                        {codes[borderCode]}{" "}
                      </span>
                    ))
                  : "none"}
              </div>
            </div>
          </div>
        </main>
      }
    </>
  );
}
