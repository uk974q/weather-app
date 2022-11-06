
async function getWeather(cityName){
    let apiKey = await fetch("/api/endpoints")
        .then(res => res.json())
        // .then(response => {
        //     console.log("Res",response)
        // })
        // .then(json => json.api)
    console.log("Api",apiKey)
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?iconSet=icons1&unitGroup=metric&include=days&key=${apiKey}&contentType=json`)
    .then(res => res.json())
    .catch(err => console.log("Error",err))
}
export {
    getWeather
}
