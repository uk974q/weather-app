import { useContext } from "react"
import { Context } from "../Context"
import { icons } from "../settings/appSettings";

export default function Hero(){
    const {currentDay, isLoading} = useContext(Context)
    const DAY = "Today"
    return(
        <div className="hero-card">
             {isLoading && <span className="spinner"></span>}
            <p className="title">{DAY}</p>
            <div className="details">
            <i className={`${icons[currentDay.icon]} icon`}></i>
                <p className="text-details">
                    <span className="temp bold">{currentDay.temp}&deg;</span>
                    <span className="sky">{currentDay.conditions}</span>
                </p>
            </div>
        </div>
    )
}