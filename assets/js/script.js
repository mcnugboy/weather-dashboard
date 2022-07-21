let button = document.getElementById("button");
let history = document.getAnimations("city-history");
let input = document.getElementById("input");
let cities = [];

console.log(cities);

let weather = {
    apiKey: "c743276c39da3cf3f23f9c47f3bd7b5b",
    fetchWeather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=" + this.apiKey
        ).then ((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const date = new Date(data.dt * 1000);

    }
}