
async function getWeather(cityName){
    let apiKey = await fetch("/.netlify/functions/config")
        .then(res => res.json())
        .then(res => res.api)
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?iconSet=icons1&unitGroup=metric&include=days&key=${apiKey}&contentType=json`)
    .then(res => res.json())
    .catch(err => console.log("Error",err))
}
export {
    getWeather
}
