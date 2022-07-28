// let submitBtn = document.getElementById('form');
// let history = document.getElementById('city-history');
// let cities = [];

// submitBtn.addEventListener('submit', function() {
//     event.preventDefault();
//     let input = document.querySelector('#city').value;
//     console.log(input);
//     getCoord(input);
// });

// console.log(cities);

// let weather = {
//     apiKey: "c743276c39da3cf3f23f9c47f3bd7b5b",
//     fetchWeather: function(city){
//         fetch(
//             "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=" + this.apiKey
//         ).then ((response) => response.json()).then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data){
//         const { name } = data;
//         const { description } = data.weather[0];
//         const { temp, humidity } = data.main;
//         const { speed } = data.wind;
//         const date = new Date(data.dt * 1000);

//     }
// }

function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=c743276c39da3cf3f23f9c47f3bd7b5b')
.then(response => response.json())
.then(data => {

    
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    


     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    
    console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}


var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }