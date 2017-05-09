# My Magic Mirror

A simple webpage for a Raspberry Pi magic mirror, updated every 10 seconds.

Within the `js/scripts.js` file, change `ENTER_CITY` and `ENTER_STATE`:

```
...

$.simpleWeather({
  woeid: '',
  location: 'ENTER_CITY, ENTER_STATE',
  unit: 'f',

  ...

```

And also, add your quotes in the "quote generator" function:

```
...

// quote generator
function getQuote() {
    var quotes = new Array(
        "Quote 1",
        "Quote 2",
        "Quote 3",
    ),

    ...

```