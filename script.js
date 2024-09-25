const apikey ="bd5e378503939ddaee76f12ad7a97608"
const apiurl ="https://api.openweathermap.org/data/2.5/weather?unit=metric"

async function checkWeather(city) {
    const response = await fetch(apiurl + `&q=${city}&appid=${apikey}`)
    if(response.status == 404){
        document.querySelector(".temp").innerHTML= `Invlied city name!`
        document.querySelector(".city").innerHTML= `Enter Correctly`
    }
    let data = await response.json()
    console.log(data);

    document.querySelector(".temp").innerHTML= Number((data.main.temp -273.15).toFixed(2)) + " °C";
    // (data.main.temp) - 273.15;
    document.querySelector(".city").innerHTML=data.name + ", " + data.sys.country;
    document.querySelector(".hum").innerHTML=data.main.humidity + "%";
    document.querySelector(".win").innerHTML=data.wind.speed+"Km/h";
    document.querySelector(".weather img").src=`sourse/${data.weather[0].main}.png`;  
    
}
checkWeather("dhaka")

document.querySelector(".search").addEventListener("click", e => {
    checkWeather(document.querySelector(".input input").value)
    document.querySelector(".input input").value = []
})
