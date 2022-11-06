async function getWeather(cityName){
    console.log("heyyy",cityName,process.env.REACT_APP_API_KEY)
    let apiKey = await fetch(".netlify/functions/api")
        .then(response => response.json())
        .then(json => json.api)
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?iconSet=icons1&unitGroup=metric&include=days&key=${apiKey}&contentType=json`)
    .then(res => res.json())
    .catch(err => console.log("Error",err))
}
export {
    getWeather
}
