import React from 'react'
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <section className='bg-[#2c2c33] border border-gray-500'>
        <div className='container mx-auto flex justify-between text-white'>
          <div className='col-lg-3 gap-3'>
            <ul className='flex text-center'>
                <li>नेपाली समय ०६ : १४ : ३४ मध्यान्ह </li>
                <li>वि सं २०८२ श्रावण २२ बिहिवार</li>
            </ul>
          </div>
          <div className='col-lg-9 items-center'>
            <ul className='flex text-center items-center'>
            <li className='fb border-l border-r border-gray-400 p-3 hover:bg-[#0765ff] hover:text-white text-gray-500'><FaFacebookF /></li>
            <li className='yt p-3 hover:bg-red-500 hover:text-white  text-gray-500'><TiSocialYoutubeCircular /></li>
            <li className='lang border-r border-l border-gray-400 p-2 text-gray-500 hover:text-white'>English</li>
            <li className='search-container  p-3 bg-blue-600'>
                <span className='search-icon'><FaSearch /></span>
            </li>
            </ul>
          </div>
          
        </div>
      </section>

      
        <header className='py-3'>
          <div className='container mx-auto flex justify-between'>
          <div className='col-lg-3'>
            <Image
                      className="logo"
                      src="/logo.jpg"
                      alt="Next.js logo"
                      width={380}
                      height={70}  
                      priority
                    />
          </div>

          <div className='col-lg-9'>
             <Image
                      className="side"
                      src="/prabhu.gif"
                      alt="Next.js logo"
                      width={748}
                      height={83}  
                      priority
                    />
          </div>
          </div>
        </header>
    </>
  )
}

export default Header
