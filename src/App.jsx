
import './App.css'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Wheater'


function App() {
  
 const [now, setNow] =  useState({}) // la funcion se inicia con un objeto porque es lo que devuelve
 
 
 useEffect(()=>{
  navigator.geolocation.getCurrentPosition(function(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const appKey = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1034cce16de67df231bc9696d62d415f`
  
    axios
    .get(appKey) // ESTE HACE LA PETICION
    .then((resp)=>{ 
      setNow(resp.data)
     
    })      // SE EJECUTA EN CASO SE CUMPLA LA PETICION
    .catch((error)=>{
      
    }) // SE EJECUTA EN CASO DE ERROR

  },function(error){console.log(error);},{enableHighAccuracy:true})
   
  },[])
    

  
  return (
    <>
      <Weather status = {now}></Weather>
    </>
  )
}

export default App
