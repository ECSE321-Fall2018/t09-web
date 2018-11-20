# rideshare9

> rideshare9's webapp

## Browser Support
**IE**: ?

**Safari**: Ok (with CORS enabled)

**FireFox**: Ok

**Chrome**: Not working

**Opera**: Ok

## Fleet Overview 

This view shows the Active Trips (ones that have yet to be completed) along with all Drivers and Passengers. 
The following table explains what information is shown within a list item

Information | Active Trips | Drivers | Passengers
------| ------ | ------ | ------ 
Title | Final Destination | Username | Username
Upon Click | Date and Time, Start Location | Status | Status

Driver and Passenger Status: On ride, standby

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
