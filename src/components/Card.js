import { icons } from "../settings/appSettings";

export default function Card({data}){  
    const d = new Date(data.datetime);
    const day = d.toLocaleString('en-US', { weekday: 'short' })
    return(
        <div className="sub-card">
            <p className="title">{day}</p>
            <i className={`${icons[data.icon]} icon`}></i>
            <p className="temp bold">{data.temp}&deg;</p>
        </div>
    )
}