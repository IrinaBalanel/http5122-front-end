// SECOND VERSION WITH STRETCH GOAL: ONE FUNCTION WITH PARAMETERS 
window.onload = function () {
    //1. API key and API links providing data
    var myKey = "348d3383ee96914effbba4ff6f79c594";
    var apiUrlToronto = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + myKey + "&units=metric";
    var apiUrlTiraspol = "https://api.openweathermap.org/data/2.5/weather?q=Tiraspol&appid=" + myKey + "&units=metric";

    // Variables
    var weather = document.getElementById("output");
    var city = document.getElementById("location");
    var icon = document.getElementById("icon");
    var iconUrlBase = "https://openweathermap.org/img/wn/";
    var iconUrl;
    var tempreture = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");
    var feelsLike = document.getElementById("feels-like");
    var btnToronto = document.getElementById("Toronto");
    var btnTiraspol = document.getElementById("Tiraspol");

    // Function to handle any city from API using two parameters: cityParameter and declared above apiUrl
    function showWeather(cityParameter, url) {
        // Show the hidden part for displaying data
        weather.style.display = "block";
        
        // Object to retrieve API data
        var xhr = new XMLHttpRequest();
        // Open connection and specify method, the info requested (file name or url))
        xhr.open("GET", url, true);
        // Specify the format of the response
        xhr.responseType = "json";
        // Specify by null that we do not send anything 
        xhr.send(null);

        // Logic: when the server is ready (on 4) and if the status is okay (on 200) then output values
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var dataAPI = xhr.response; // response will be in json format 
                    // console.log(dataAPI); // this will show in the console all data available
                    
                    //Output values from API
                    city.innerHTML = dataAPI.name;
                    
                    //Dynamically updated url for icon based on different weather conditions
                    iconUrl = iconUrlBase+dataAPI.weather[0].icon+"@2x.png";
                    // console.log(iconUrl);
                    //Add img to the html with js
                    icon.innerHTML = "<img src="+iconUrl+">";
                    
                    tempreture.innerHTML = dataAPI.main.temp.toFixed(0)+"&deg;C";
                    conditions.innerHTML = dataAPI.weather[0].description;
                    feelsLike.innerHTML = dataAPI.main.feels_like.toFixed(0)+"&deg;C";
                } else {
                    // Handle an error from API and clear out the fields
                    city.innerHTML = "API call was unsuccessful";
                    icon.innerHTML = "";
                    tempreture.innerHTML = "";
                    conditions.innerHTML = "";
                    feelsLike.innerHTML = "";
                    console.log(xhr.status);
                }
            }
        };
    }

    // Event listeners for buttons and application of the function with passed parameteres
    btnToronto.addEventListener("click", function() {
        showWeather("Toronto", apiUrlToronto);
    });

    btnTiraspol.addEventListener("click", function() {
        showWeather("Tiraspol", apiUrlTiraspol);
    });
};



// FIRST VERSION WITHOUT STRETCH GOAL:

// window.onload = function (){
//     //1. API key and API links providing data
//     var myKey="348d3383ee96914effbba4ff6f79c594";
//     var apiToronto="https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=348d3383ee96914effbba4ff6f79c594&units=metric";
//     var apiTiraspol="https://api.openweathermap.org/data/2.5/weather?q=Tiraspol&appid=348d3383ee96914effbba4ff6f79c594&units=metric";

//     //2. Variables
//     var weather = document.getElementById("output");
//     var city = document.getElementById("location");
//     var icon = document.getElementById("icon");
//     var iconUrlBase = "https://openweathermap.org/img/wn/";
//     var iconUrl;
//     var tempreture = document.getElementById("temperature");
//     var conditions = document.getElementById("conditions");
//     var feelsLike = document.getElementById("feels-like");
//     var btnToronto = document.getElementById("Toronto");
//     var btnTiraspol = document.getElementById("Tiraspol");
    
//     // 3. LOGIC
//     Event listener for button Toronto
//     btnToronto.addEventListener("click", function(){
//         //Show the hidden part for displaying data
//         weather.style.display = "block";
//         //Object to retrive API data
//         var xhr = new XMLHttpRequest();
//         // Open connection and specify method, the info requested (file name or url), and ? )
//         xhr.open("GET", apiToronto, true);
//         // Specify the format of the response
//         xhr.responseType = "json";
//         // Specify by null that we do not send anything 
//         xhr.send(null);

//         // Logic: when the server is ready (on 4) and if the status is okay (on 200) then output values
//         xhr.onreadystatechange = function (){
//             if(xhr.readyState === 4) {
//                 if(xhr.status === 200) {
//                     var dataAPI = xhr.response; // response will be in json format 
//                     // console.log(dataAPI); // this will show in the console all data available
                    
//                 //Output values from API
//                     city.innerHTML = dataAPI.name;
//                     //Dynamically updated url for icon based on different weather conditions
//                     iconUrl = iconUrlBase+dataAPI.weather[0].icon+"@2x.png";
//                     // console.log(iconUrl);
//                     //Add img to the html with js
//                     icon.innerHTML = "<img src="+iconUrl+">";
//                     tempreture.innerHTML = dataAPI.main.temp.toFixed(0)+"&deg;C";
//                     conditions.innerHTML = dataAPI.weather[0].description;
//                     feelsLike.innerHTML = dataAPI.main.feels_like.toFixed(0)+"&deg;C";

//                 } else {
//                 //Handle an error from API and clear out the fields
//                     city.innerHTML = "API call was unsuccessful";
//                     icon.innerHTML = "";
//                     tempreture.innerHTML = "";
//                     conditions.innerHTML = "";
//                     feelsLike.innerHTML = "";
//                     console.log(xhr.status);
//                 };
//             };
//         };
//     });
//     Event listener for button Tiraspol
//     btnTiraspol.addEventListener("click", function(){
//         //Show the hidden part for displaying data
//         weather.style.display = "block";
//         //Object to retrive API data
//         var xhr = new XMLHttpRequest();
//         // Open connection and specify method, the info requested (file name or url), and ? )
//         xhr.open("GET", apiTiraspol, true);
//         // Specify the format of the response
//         xhr.responseType = "json";
//         // Specify by null that we do not send anything 
//         xhr.send(null);

//         // Logic: when the server is ready (on 4) and if the status is okay (on 200) then output values
//         xhr.onreadystatechange = function (){
//             if(xhr.readyState === 4) {
//                 if(xhr.status === 200) {
//                     var dataAPI = xhr.response; // response will be in json format 
//                     // console.log(dataAPI); // this will show in the console all data available
                
//                 //Output values from API
//                     city.innerHTML = dataAPI.name;
//                     //Dynamically updated url for icon based on different weather conditions
//                     iconUrl = iconUrlBase+dataAPI.weather[0].icon+"@2x.png";
//                     // console.log(iconUrl);
//                     //Add img to the html with js
//                     icon.innerHTML = "<img src="+iconUrl+">";
//                     tempreture.innerHTML = dataAPI.main.temp.toFixed(0)+"&deg;C";
//                     conditions.innerHTML = dataAPI.weather[0].description;
//                     feelsLike.innerHTML = dataAPI.main.feels_like.toFixed(0)+"&deg;C";

//                 } else {
//                 // Handle an error from API and clear out the fields
//                     city.innerHTML = "API call was unsuccessful";
//                     icon.innerHTML = "";
//                     tempreture.innerHTML = "";
//                     conditions.innerHTML = "";
//                     feelsLike.innerHTML = "";
//                     console.log(xhr.status);
//                 }
//             };
//         };
//     });


// };