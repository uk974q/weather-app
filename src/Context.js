import React, { useState } from "react"
import { getWeather } from "./utils/api"
const Context = React.createContext()
function ContextProvider(props){

    const [currentDay, setCurrentDay] = useState({})
    const [forecastDays, setForecastDays] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function handleMenuClick(cityName){
        setIsLoading(true)
        activateButton(cityName)
        // let apiKey = await fetch("/api/")
        // .then(res => res.json())
        // console.log("API:",apiKey)
        let res = await getWeather(cityName)
        setIsLoading(false)
        setCurrentDay(res.days[0])
        setForecastDays(res.days.slice(1,4))
    }
    function activateButton(cityName){
        document.getElementsByClassName("active")[0]?.classList.remove("active")
        document.getElementById(cityName).classList.add("active")
    }
    
    return(
        <Context.Provider value={{handleMenuClick, currentDay, forecastDays, isLoading}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}