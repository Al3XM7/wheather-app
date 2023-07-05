import { useState } from "react"
const Weather = ({status}) =>{
    console.log(status)
    const [ units, setUnits]= useState(true)
    const temperature = units?`${Math.round((status.main?.temp - 273.15))} ℃`: `${Math.ceil((status.main?.temp - 273.15)*1.8+32)}°F`
    const country = `Country : ${status.sys?.country}`
    const city = `City : ${status.name}`
    const wind =`Wind : ${Math.round(status.wind?.speed *1.60)}Km/h`
    const humidity = `Humidity : ${status.main?.humidity}%`
    const tempChange = ()=>{
        setUnits(!units)
    }
    const [ bg, setBg]= useState(true)
    const backgrounds = bg? '/cielo-dia.jpg': '/noche5.jpeg'
    
    document.body.style = `background-image: url(${backgrounds});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    transition: 500ms;`
    const bgChange =()=>{
        
    setBg(!bg)
    } 
    const icons = `${status.weather?.[0].icon}.png`
    return (
        <>
        <div className="head">
            <h1 className="title">Happy Weather</h1>
            <button className="head__bgchange" onClick={bgChange}>
            D/W
            </button>
        </div>
        
        <div className="container">
            <img className="icons" src={icons} alt="" />
        <h2 className="temperature"> {temperature}</h2>
        <h2 className="country">{country}</h2>
        <h3 className="dates">{city}</h3>
        <h3 className="dates">{wind}</h3>
        <h3 className="dates">{humidity}</h3>
        <button className="degrees" onClick={tempChange}><p>Change to °F /℃</p></button>
        </div>
       
        </>
    )
}
export default Weather