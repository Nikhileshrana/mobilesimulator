"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios";

const page = () => {
  const [city, setcity] = useState("Delhi");
  const [weatherdata, setweatherdata] = useState([]);
  const api_key = "594d1f7675f4917a6efadcaf50d34ca4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const apiwork = async () => {
    try
    {
      const response = await axios.get(url);
      setweatherdata(response.data);
      weatherdata.push(response.data);
      console.log(weatherdata);
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
    <h1 onClick={(e)=>{console.log("Don't Play With My Dick Bitch.!")}}>Weather App </h1>

    <div>
      {weatherdata.map((elem,i)=>{
        return <div key={i}>{elem}</div>
      })}
    </div>
    </>
  )
}

export default page