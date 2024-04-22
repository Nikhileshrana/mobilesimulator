"use client"
import React from 'react'
import Link from 'next/link'

const Logout = () => {
  return (
    <>
    <div Style="text-align:right; padding:1vh;">
        <Link href="/">
            <img src='/logout.svg' alt='Logout'/>
        </Link>
    </div>
    </>
  )
}

export default Logout