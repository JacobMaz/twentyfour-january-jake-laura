if (navigator.geolocation) {
    //Return the user's longitude and latitude on page load using HTML5 geolocation API
    window.onload = function () {
      navigator.geolocation.getCurrentPosition(getCurrentLocation);
    };
  }
  function getCurrentLocation(position, props) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    $.getJSON(
      'http://api.openweathermap.org/data/2.5/weather?zip=46148,us&appid=c6fbbc194fa362c25905f73877b618f9',
      function (data) {
        console.log(data);
        console.log(data.main.temp);
        $(".city")[0].append(data.name + " ");
        $(".temperature")[0].append(data.main.temp + "°C");
        $(".weatherdescription")[0].append(data.weather[0].description + " ");
      }
    )
  };
  export default getCurrentLocation;