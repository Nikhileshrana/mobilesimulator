"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Weather from "@/Components/Weather"
import Logout from "@/Components/Logout"

const page = () => {

  const [city, setcity] = useState("Rohini");
  const [initialcity, setinitialcity] = useState("");

  const [weatherdata, setweatherdata] = useState([]);
  const api_key = "594d1f7675f4917a6efadcaf50d34ca4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const [weathertype, setweathertype] = useState([]);

  const [weathercity, setweathercity] = useState("");

  const apiwork = async () => {
    try
    {
      const response = await axios.get(url);
      setweatherdata(response.data);
      console.log(response.data);
    }
    catch(error)
    {
      console.log(error);
    }
  } 

  useEffect(()=>{
    apiwork();
  },[]);

  

  return (
    <>
      <Logout />

      <div Style=" display:flex; padding:5vw; gap:1vw;">
      <div id='cityname'><input placeholder='City Name' onChange={(e)=>{setinitialcity(e.target.value)}}/></div>
      <div id='submitcity'><button onClick={()=>{setcity(initialcity); console.log(city); apiwork();}}>Double Click to Submit</button></div>
      </div>

      <Weather img={<img src={`http://openweathermap.org/img/w/${weatherdata.weather && weatherdata.weather.length > 0 && weatherdata.weather[0].icon}.png`} alt="Weather Icon" />} wind_speed={weatherdata.wind && weatherdata.wind.speed} type={weatherdata.weather && weatherdata.weather.length > 0 && weatherdata.weather[0].description} temp_max={weatherdata.main && weatherdata.main.temp_max}  temp_min={weatherdata.main && weatherdata.main.temp_min} temp={weatherdata.main && weatherdata.main.temp} city={weatherdata.name} />
    </>
  )
}

export default page