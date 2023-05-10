import Image from "next/image";

export default function Details({ data, codes }) {
  console.log(codes);
  return (
    <>
      {
        <main className="country-details-container">
          <div className="country-details-content d-flex">
            <Image
              src={data.flags.svg}
              width={300}
              height={300}
              alt={data.name.common + " Flag"}
            />
            <div className="details-text-content">
              <h2>{data.name.common}</h2>
              <div className="content-container">
                <div className="content1">
                  <ul>
                    <li>
                      Native Name:{" "}
                      {Object.values(data.name.nativeName)[0].common}
                    </li>
                    <li>Population: {data.population}</li>
                    <li>Region: {data.region}</li>
                    <li>Sub Region: {data.subregion}</li>
                    <li>Capital: {data.capital}</li>
                  </ul>
                </div>
                <div className="content2">
                  <ul>
                    <li>Top Level Domain: {data.tld}</li>
                    <li>
                      Currencies:{" "}
                      {Object.values(data.currencies)
                        .map(({ name }) => name)
                        .reduce(
                          (acc, currency, index, { length }) =>
                            acc + currency + (index !== length - 1 ? ", " : ""),
                          ""
                        )}
                    </li>
                    <li>
                      Languages: {Object.values(data.languages).join(", ")}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                Border Countries:
                {data.borders.map((code) => (
                  <span key={code}>{codes[code]}</span>
                ))}
              </div>
            </div>
          </div>
        </main>
      }
    </>
  );
}
