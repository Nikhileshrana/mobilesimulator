"use client"
import React, { useState } from 'react';
import Link from "next/link";

const page = () => {
  const [password, setpassword] = useState("");
  const [nextlink, setnextlink] = useState("");
  const [loginbutton, setloginbutton] = useState("LOGIN")

  const authentication=()=>{
    if(password==="0908")
    {
      setloginbutton(<Link className='pass' href="Login">Click again to Enter.</Link>);
    }
    else
    {
      setnextlink(<div className='error'>Wrong Pin! Try Again.</div>)
    }
  }

  let inputentered =  document.getElementById("inputbox");


  return (
    <>
    <div className='container'>
      <div>
      <input onChange={(e)=>{setpassword(e.target.value);}} type='password' id='inputbox' placeholder='Enter PIN' maxlength='4' />
      </div>
      <div><button onClick={authentication}>{loginbutton}</button></div>
      <div>{nextlink}</div>
    </div>
    </>
      
  )
}

export default page;