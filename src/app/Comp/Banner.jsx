"use client"
import React, { useEffect, useState } from 'react'
function Banner() {
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts`).then(a=>a.json()).then(b=>setData(b))
    },[])
  return (
    <>
      <section>
        <div className='container text-center py-5 mx-auto' >
            {data.map(a=>(
              <article className='shadow py-3' key={a.id}>
                   <h1>{a.title.rendered}</h1>
                   <img className='w-full' src={a.featured_image_src} alt="" />
              </article>  
            ))}  
        </div>
      </section>

    </>
  )
}

export default Banner
