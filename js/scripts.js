$(document).ready(function() {
    getWeather(); //Get the initial weather.
    getDateAndTime();
    setInterval(getDateAndTime, 10000);
    setInterval(getWeather, 6000); //Update the weather every 10 minutes.
});

// weather
function getWeather() {
  $.simpleWeather({
    woeid: '',
    location: 'ENTER_CITY, ENTER_STATE',
    unit: 'f',
    success: function(weather) {
      html = '<div id="weather-temp">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
      html += '<div id="city">'+weather.city+', '+weather.region+'</div>';
      html += '<div id="currently"><span>CURRENTLY: </span>'+weather.currently+'</div>';
      html += '</ul>';

      html += '<p>&#160;</p>';

      html += '<ul>';

      for(var i=0;i<weather.forecast.length;i++) {
        html += '<li><span>'+weather.forecast[i].day+':</span> '+weather.forecast[i].high+'&deg;F</li>';
      }

      html += '</ul>';

      $("#weather").html(html);


      switch(parseInt(weather.code)) {
        case 0:
            var weatherCondition = 'snow';
            break;
        case 1:
            var weatherCondition = 'snow';
            break;
        case 2:
            var weatherCondition = 'snow';
            break;
         case 3:
            var weatherCondition = 'thunderstorm';
            break;
         case 4:
            var weatherCondition = 'thunderstorm';
            break;
         case 5:
            var weatherCondition = 'snow';
            break;
         case 6:
            var weatherCondition = 'snow';
            break;
         case 7:
            var weatherCondition = 'snow';
            break;
         case 8:
            var weatherCondition = 'rain';
            break;
         case 9:
            var weatherCondition = 'rain';
            break;
         case 10:
            var weatherCondition = 'rain';
            break;
         case 11:
            var weatherCondition = 'rain';
            break;
         case 12:
            var weatherCondition = 'rain';
            break;
         case 13:
            var weatherCondition = 'snow';
            break;
         case 14:
            var weatherCondition = 'snow';
            break;
         case 15:
            var weatherCondition = 'snow';
            break;
         case 16:
            var weatherCondition = 'snow';
            break;
         case 17:
            var weatherCondition = 'snow';
            break;
         case 18:
            var weatherCondition = 'snow';
            break;
         case 19:
            var weatherCondition = 'cloudy';
            break;
         case 20:
            var weatherCondition = 'cloudy';
            break;
         case 21:
            var weatherCondition = 'cloudy';
            break;
         case 22:
            var weatherCondition = 'cloudy';
            break;
         case 23:
            var weatherCondition = 'cloudy';
            break;
         case 24:
            var weatherCondition = 'cloudy';
            break;
         case 25:
            var weatherCondition = 'cloudy';
            break;
        case 26:
            var weatherCondition = 'cloudy';
            break;
         case 27:
            var weatherCondition = 'partly-cloudy-night';
            break;
         case 28:
            var weatherCondition = 'partly-cloudy-day';
            break;
         case 29:
            var weatherCondition = 'partly-cloudy-night';
            break;
         case 30:
            var weatherCondition = 'partly-cloudy-day';
            break;
         case 31:
            var weatherCondition = 'clear-night';
            break;
         case 32:
            var weatherCondition = 'clear-day';
            break;
         case 33:
            var weatherCondition = 'clear-night';
            break;
         case 34:
            var weatherCondition = 'clear-day';
            break;
         case 35:
            var weatherCondition = 'snow';
            break;
         case 36:
            var weatherCondition = 'sunny';
            break;
         case 37:
            var weatherCondition = 'thunderstorm';
            break;
         case 38:
            var weatherCondition = 'thunderstorm';
            break;
         case 39:
            var weatherCondition = 'thunderstorm';
            break;
         case 40:
            var weatherCondition = 'rain';
            break;
         case 41:
            var weatherCondition = 'snow';
            break;
         case 42:
            var weatherCondition = 'snow';
            break;
         case 43:
            var weatherCondition = 'snow';
            break;
         case 44:
            var weatherCondition = 'partly-cloudy-day';
            break;
         case 45:
            var weatherCondition = 'thunderstorm';
            break;
         case 46:
            var weatherCondition = 'snow';
            break;
         case 46:
            var weatherCondition = 'snow';
            break;
          case 47:
            var weatherCondition = 'thunderstorm';
            break;
        default:
            var weatherCondition = 'clear-day';
    }
        // hide all
        $('.partly-sunny, .sun-shower, .thunder-storm, .cloudy, .flurries, .sunny, .rainy, .night-clear, .night-partly-cloudy, .night-shower').hide();

        if (weatherCondition == 'clear-night'){
            $('.night-clear').show();
        }
        else if (weatherCondition == 'clear-day'){
            $('.sunny').show();
        }
        else if (weatherCondition == 'cloudy'){
            $('.cloudy').show();
        }
        else if (weatherCondition == 'partly-cloudy-night'){
            $('.night-partly-cloudy').show();
        }
        else if (weatherCondition == 'partly-cloudy-day'){
            $('.partly-sunny').show();
        }
        else if (weatherCondition == 'rain'){
            $('.rainy').show();
        }
        else if (weatherCondition == 'snow'){
            $('.flurries').show();
        }
        else if (weatherCondition == 'thunderstorm'){
            $('.thunder-storm').show();
        }
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

// quote generator
function getQuote() {
    var quotes = new Array(
        "Quote 1",
        "Quote 2",
        "Quote 3",
    ),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('#greeting').text( randno );
}

// date
function getDateAndTime() {
    var currentDate = $('#date').text();

    $('#time').text(moment().format('h:mm a'));
    $('#date').text(moment().format('MMMM Do YYYY'));

    if (currentDate != $('#date').text()){
        //run dat ting for da quote
        getQuote();
    }
}
