import { useContext, useEffect } from "react"
import { Context } from "../Context"

export default function Header(){
    const {handleMenuClick} = useContext(Context)
    const places = ["Mumbai", "Bangalore", "Kochi"]
    const placeMenus = places.map(el => (
        <nav key={el} id={el} className="btn" onClick={() => handleMenuClick(el)}>{el}</nav>
    ))
    useEffect(()=>{
        document.getElementsByClassName('btn')[0].click()
        console.log("Hi")
    },[places.length])
    
    return(
        <div className="header">
            {placeMenus}
        </div>
    )
}