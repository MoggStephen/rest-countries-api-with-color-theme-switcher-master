// Uses a cached version of the data so that if "https://restcountries.com/v3.1/all" ever breaks we can use the last working result from it.
let countriesCache = null;

export default async function handler(req, res) {

  await fetchCountries();

  //Always return the cached data in case the request to restcountries fails!
  //If it didnt fail then cached data will be up to date!
  res.status(200).json(countriesCache);

}

async function fetchCountries(){
  try {
    // Get the data
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    // HANDLE ERRORS
    //error status code
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    //empty response body
    if (!data) {
      throw new Error('Response body is empty');
    }
    //undexpected data
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Response data is not in the expected format');
    }
    
    // Response should be valid and we can cache the data 
    countriesCache = data;
    // Quick time log
    console.log(`Fetched new data at ${new Date().toLocaleTimeString()}`);
  } 
  // If restcountries ever breaks just catch and log it!
  // We have countriesCache as a backup
  catch (error) {
    console.error(`${new Date().toLocaleTimeString()}. 'https://restcountries.com/v3.1/all' api error: `, error);
  }
}