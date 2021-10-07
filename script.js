//Make form with input
//button to submit
$(".cityBtn").on("click");
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
var citySearch = ('#search-text')


fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city 
    + '&exclude={alerts,minutely,hourly}'
    + '&appid=462c52e185b2948ddb64266b52d11951')
 console.log(fetch)