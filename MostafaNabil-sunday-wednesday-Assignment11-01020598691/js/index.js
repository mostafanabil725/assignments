

// api key 5c2ff6b3049e42a2be3212141252706
//api.weatherapi.com/v1/search.json?key=5c2ff6b3049e42a2be3212141252706&q=lond

http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
var apiKey = "5c2ff6b3049e42a2be3212141252706";

var cityInput = document.querySelector('#searchInput');
console.log(cityInput)





async function getCity(city) {
   city = cityInput.value;
   var apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=5c2ff6b3049e42a2be3212141252706&q=${city}`
   var response = await fetch(apiUrl);
   console.log(response);
   
    
}
getCity();