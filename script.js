//Make form with input
//button to submit
// $(".cityBtn").on("click");
//container for buttons after submission
//When click search button or submit the form
    //event listener on the click or submit
        //grab the value from the input
        //save result in local storage
        //display button in the button container
        //clear input 
    //
        //fetch call to API
            //one fetch for lat/lon
            //second fetch to https://openweathermap.org/api/one-call-api for other
                //display info
//462c52e185b2948ddb64266b52d11951 <weather dashboard key
// var citySearch = ('#search-text')


// fetch('https://api.openweathermap.org/data/2.5/weather?q='
//     + city 
//     + '&exclude={alerts,minutely,hourly}'
//     + '&appid=462c52e185b2948ddb64266b52d11951')
//  console.log(fetch)

var searchButton = $("#searchBtn")
var searchForCity = $("#searchText")
var thisPageURL = ""
// variable to save recent searches in local storage
var recentSearches = document.getElementById("savedCities")

function todaysWeather(data) {
    var div1 = document.getElementById("weatherCity")
    div1.innerHTML = data.name
    var div2 = document.getElementById("weatherTempNow")
    div2.innerHTML = "Temperature: " + data.main.temp
    var div3 = document.getElementById("weatherHighTemp")
    div3.innerHTML = "High Temperature: " + data.main.temp_max
    var div4 = document.getElementById("weatherLowTemp")
    div4.innerHTML = "Low Temperature: " + data.main.temp_min
    var div5 = document.getElementById("weatherWind")
    div5.innerHTML = "Wind: " + data.wind.speed
    var div6 = document.getElementById("weatherHumidity")
    div6.innerHTML = " Humidity: " + data.main.humidity
    var div7 = document.getElementById("weatherUV")
    div7.innerHTML = " UV: " + data.main.humidity
    var weatherIcon = document.getElementById("image")
    weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
}

$(searchButton).click(async function (event) {
    event.preventDefault()
    searchButton = searchForCity.val()
    thisPageURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchButton + " ," + searchButton + "&units=imperial&current.temp=&current.humidity=&daily.weather.description=&current.uvi=&hourly.wind_speed=&current.weather.icon=&appid=462c52e185b2948ddb64266b52d11951"

    // get api

    data = await fetch(thisPageURL)
        .then(result => result.json())
        .then(data => {
            return (data)
        })
    todaysWeather(data)

})