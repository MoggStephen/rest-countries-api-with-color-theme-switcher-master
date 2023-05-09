The api can sometimes stop working and not return any json. On revalidate the page wouldnt display any content. This means we need to cache the last working data and use this if the api goes down!
With getstatic props we can get the content at build time and then revalidate but we would need to then handle if the api breaks using a package as we cant make a call to an api we create. This way it will always be faster.
With getserversideprops we can get the content and use revalidate so it works like getstaticprops. We can handle caching the last working result from the api with an api we create to make to request the data. Its just getserverside is always slower

getstaticprops - gets data at build time
getserversideprops - gets data at request time.

# getstaticprops
- Benefits:
    - Page always built at build time or revalidate time so its always faster!
- Negatives: 
    - Cant call an api we create!
    - Would have to use a package to cache data so content is always displayed!
    - Cant use in components!

# getserversideprops
- Benefits:
    - Can revalidate the data!
    - Can call an api we create to cache data easily!
    - Can use in components
- Negatives:
    - Page built at request time so always slower than getstaticprops
# clientsidegeneration
- benefits
    - content will be up to date
- negatives
    - slow for user
    - page built on client side so really slow!
    - api might be broken and there will be no content displayed!

So the choice comes down to how i want to cache the data. Do i handle caching myself with an api i create and getserversideprops or use a caching package and getstaticprops. getstaticprops will always be faster but im choosing getserversideprops for now as i want to create an api myself for this!
I think getserversideprops so i can cache the data simply in a variable in my api! And use it in a component!

# Rundown

- index.js uses serverSideProps to get countries data from get-countries api. Revalidate is used so it performs like getStaticProps.
- Revalidate handles the caching of the data for 24 hours and the get-countries api handles caching the data if the restcountries api ever breaks!
- get-countries api will make the request to restcountries api, handle loads of error cases and always returns cached data so the website functionality never breaks!
- Dynamically creates the host so that i can use localhost for development and so that vercel deployment works! This is done using environment variables and req.headers.host
- Querying the api for the region takes quite a while. It will definitely be best if i do the logic myself in js.
- I need a state of the first countries data on load and the current data that we are searching through.
- Text Search and region dont work together. Search looks through all countries and ignores region and vice versa.