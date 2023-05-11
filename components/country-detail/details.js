import Image from "next/image";

export default function Details({ data, codes, back}) {
  return (
    <>
      {
        <main className="country-details-container">
          <button className="back-btn btn my-5" onClick={back}>Back</button>

          <div className="country-details-content d-flex gap-5">
            <Image
              src={data.flags.svg}
              width={550}
              height={398}
              alt={data.name.common + " Flag"}
            />
            <div className="details-text-content">
              <h2 className="">{data.name.common}</h2>
              <div className="content-container d-flex gap-5 my-5">
                <ul className="content1">
                  <li>
                    <strong>Native Name:</strong> {Object.values(data.name.nativeName)[0].common}
                  </li>
                  <li><strong>Population:</strong> {data.population}</li>
                  <li><strong>Region:</strong> {data.region}</li>
                  <li><strong>Sub Region:</strong> {data.subregion}</li>
                  <li><strong>Capital:</strong> {data.capital}</li>
                </ul>
                <ul className="content2">
                  <li><strong>Top Level Domain:</strong> {data.tld}</li>
                  <li>
                    {/* Loop through data, adding currencies with comma correctly */}
                    <strong>Currencies:</strong>{" "}
                    {Object.values(data.currencies)
                      .map(({ name }) => name)
                      .reduce(
                        (acc, currency, index, { length }) =>
                          acc + currency + (index !== length - 1 ? ", " : ""),
                        ""
                      )}
                  </li>
                  <li><strong>Languages:</strong> {Object.values(data.languages).join(", ")}</li>
                </ul>
              </div>
              <div>
              <strong>Border Countries: </strong>
                {data.borders.map((borderCode) => (
                  <span key={borderCode}>{codes[borderCode]}</span>
                ))}
              </div>
            </div>
          </div>
        </main>
      }
    </>
  );
}
