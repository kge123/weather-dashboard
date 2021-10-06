//462c52e185b2948ddb64266b52d11951 <weather dashboard key


fetch('https://api.openweathermap.org/data/2.5/onecall?lat={27.950575}&lon={-82.457176}&exclude={alerts,minutely,hourly}&appid=462c52e185b2948ddb64266b52d11951')
 .then(response => response.api)
 .then(data => console.log(data))