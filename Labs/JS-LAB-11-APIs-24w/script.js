window.onload = function (){
    var city = document.getElementById("location");
    var tempreture = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");
    

    var myAPIKey = "348d3383ee96914effbba4ff6f79c594";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=348d3383ee96914effbba4ff6f79c594&units=metric";
    
    //Object to retrive API data
    var xhr = new XMLHttpRequest();
    // Open connection and specify method, the info requested (file name or url), and ? )
    xhr.open("GET", url, true);
    // Specify the format of the response
    xhr.responseType = "json";
    // Specify by null that we do not send anything 
    xhr.send(null);

    // Logic: when the server is ready (on 4) and if the status is okay (is 200) then output values
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                var dataAPI = xhr.response; // this will be in json format 
                console.log(dataAPI); // this will show in the console all data available
                city.innerHTML = dataAPI.name;
                tempreture.innerHTML = dataAPI.main.temp.toFixed(0)+"&deg;C";
                conditions.innerHTML = dataAPI.weather[0].description.toString().charAt(0).toUpperCase() + dataAPI.weather[0].description.slice(1)+".";

            } else {
                // handle an error from API
                city.innerHTML = "API call was unsuccessful";
                console.log(xhr.status);
            }
        }
    }
}

