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
      setloginbutton(<Link className='pass' href="Login">START</Link>);
      
    }
    else
    {
      setnextlink(<div className='error'>Wrong Pin! Try Again.</div>)
    }
  }

  return (
    <>
    <div className='container'>
      <div>
      <input onChange={(e)=>{setpassword(e.target.value);}} type='password' placeholder='Enter PIN' maxlength='4' />
      </div>
      <div><button onClick={authentication}>{loginbutton}</button></div>
      <div>{nextlink}</div>
    </div>
    </>
      
  )
}

export default page;