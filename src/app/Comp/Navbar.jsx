"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
function Navbar() {
    let [data, setData]=useState([])
    useEffect(()=>{
        fetch(`https://bankingkhabar.com/wp-json/wp/v2/categories`).then(a=>a.json()).then(b=>setData(b))
    },[])
  return (
    <>
      <nav className='text-[16px] font-bold'>
        <div className='container bg-blue-900 mx-auto text-white py-2'>
          <ul className='flex justify-evenly text-center items-center'>
            <li className=' before:border-l before:border-gray-400 before:py-2 '>
                <Link className= 'hover:bg-red-600' href={"/"}>मुख्य पेज</Link>
            </li>
            {data.map((a)=>(
               <li className=' before:border-l before:border-gray-400 before:py-2 '  key={a.id}>
                <Link className='hover:bg-red-600' href={`/category/${a.id}`}>{a.name}</Link>
               </li> 
            ))}  
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
