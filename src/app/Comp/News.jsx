"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function News() {
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=1`).then(a=>a.json()).then(b=>setData(b))
    },[])
  return (
    <>
    <section className='py-3'>
         <div className='container mx-auto'>
             <img className='w-full' src="https://bankingkhabar.com/wp-content/uploads/2025/07/nic.gif" alt="" />
         </div>
      </section>

    <section>
        <div className='container mx-auto'>
        <h2 className='bg-red-600 inline-block text-white p-2 my-4'>बैंकिङ-शैली</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map(a=>(

       
        <SwiperSlide key={a.id}>
          <img className='w-full thumb' src={a.featured_image_src} alt="" />
          <p className='fw-bold py-2'>{a.title.rendered}</p>
        </SwiperSlide>
         ))}
      </Swiper>
      </div>
    </section>
      
    </>
  )
}

export default News
