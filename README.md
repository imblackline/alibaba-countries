# interview-task

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

## Main Features
- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page (client-side routing)
- Clicking on border countries on the detail page should link the user to the detail of those countries

## Additional Features
+ Toggle the color scheme between light and dark mode without using any 3rd party libraries
+ Searching using the keywords Grmany or Grmny should also work
+ Make sure styles are loaded whenever they're really needed. e.g., The styles for the details page don't load on the homepage
+ Make sure the ratio for the country flags is 4:3 or any other ratio you find suitable
+ Dockerize your application by creating an efficient Dockerfile
+ Store the filters in the URL query strings and sync it with the component filter object
+ Add lazy loading and skeleton for country images and list

### Demo link
See [demo on Vercel](https://alibaba-country.vercel.app/#/).
