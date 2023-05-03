The api can sometimes stop working and not return any json. On revalidate the page wouldnt display any content. This means we need to cache the last working data and use this if the api goes down!
With getstatic props we can get the content at build time and then revalidate but we would need to then handle if the api breaks using a package as we cant make a call to an api we create.
With getserversideprops we can get the content and use revalidate so it works like getstaticprops. We can handle caching the last working result from the api with an api we create to make to request the data.

getstaticprops - gets data at build time
getserversideprops - gets data at request time.

# getstaticprops
- Benefits:
    - Page always built at build time or revalidate time so its always faster!
- Negatives: 
    - Cant call an api we create!
    - Would have to use a package to cache data is always displayed!
    - Cant use in components!

# getserversideprops
- Benefits
    - With revalidate we can get the same performance as getstaticprops!
    - Can call an api we create to cache data easily!
    - Can use in components

# clientsidegeneration
- benefits
    - content will be up to date
- negatives
    - slow for user
    - page built on client side so really slow!
    - api might be broken and there will be no content displayed!

So the choice comes down to how i want to cache the data. Do i handle caching myself with an api i create and getserversideprops or use a caching package and getstaticprops.
I think getserversideprops so i can cache the data simply in a variable in my api! And use it in a component!