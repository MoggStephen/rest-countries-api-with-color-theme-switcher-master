// Uses a cached version of the data so that if "https://restcountries.com/v3.1/all" ever breaks we can use the last working result from it.
let countriesCache = null;

export default async function handler(req, res) {
  //console.log("API-LOG1");
  // On first load we need to fetch the data
  // We can tell its the first load if countriesCache is null
  if (countriesCache === null) {
    await fetchCountries();
    res.status(200).json(countriesCache);
  } 
  // If not the first load we already have the data cached and can return it
  else {
    res.status(200).json(countriesCache);
  }
}

async function fetchCountries(){
  try {
    // Get the data
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    // Cache the data 
    countriesCache = data;
    //console.log("API-LOG2 ", countriesCache);
    // Quick time log
    console.log(`Fetched new data at ${new Date().toLocaleTimeString()}`);
  } 
  // If restcountries ever breaks just catch and log it!
  // We have countriesCache as a backup
  catch (error) {
    console.error('restcountries api error: ', error);
  }
}