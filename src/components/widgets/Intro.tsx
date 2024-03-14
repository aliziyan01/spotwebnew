'use client'
import React, { useState } from 'react'
import Wrapper from "@/components/shared/Wrapper";
import Link from 'next/link';
import { introData } from '@/components/data/introData';


const Intro = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
  
    const handleMouseEnter1 = () => {
      setIsHovered1(true);
    };
  
    const handleMouseLeave1 = () => {
      setIsHovered1(false);
    };
  
    const handleMouseEnter2 = () => {
      setIsHovered2(true);
    };
  
    const handleMouseLeave2 = () => {
      setIsHovered2(false);
    };
  
    const handleMouseEnter3 = () => {
      setIsHovered3(true);
    };
  
    const handleMouseLeave3 = () => {
      setIsHovered3(false);
    };
  
    const handleMouseEnter4 = () => {
      setIsHovered4(true);
    };
  
    const handleMouseLeave4 = () => {
      setIsHovered4(false);
    };
  
  
  return (
    <section
    style={{
        background: 'linear-gradient(139deg, rgba(0,0,0,1) 40%, rgba(2,25,111,1) 80%, rgba(7,52,206,1) 100%)',
    }}
    className='pt-24'
    
  >
    <Wrapper>
    { 
   introData.map((item) => (
    <div key={item.id} className=" px-4 "> 
      <h1 className="text-slate-300 md:text-lg text-sm">PIONEERING EXCELLENCE IN SOFTWARE SOLUTION</h1>
      <h1 className="text-white font-bold md:text-5xl pt-5 text-2xl ">SPOT LINKS <br></br> INNOVATIONS</h1>
      <p className="pt-10 text-white text-sm md:text-lg">{item.para}</p>
    </div>
  ))
   }
        

   <div className='pt-10 px-4 text-sm md:text-lg'>
   
   <Link href={"#contact"} className="bg-L_primary text-white px-6 py-3 rounded-full">CONTACT US</Link>
   </div>

   <div className="flex justify-left pt-8 px-4 pb-16">
      <Link
        href="https://www.google.com"
        className="m-1 h-9 w-9 rounded-full border-[0.1px] border-white uppercase leading-normal shadow-md shadow-L_primary transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 dark:border-white"
        style={{
          boxShadow: isHovered1 ? '0 0 18px 5px rgba(0, 0, 255, 0.5)' : 'none'
        }}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          className="mx-auto h-full w-2 text-white hover:text-L_primary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path>
        </svg>
      </Link>
      <Link
        href="https://www.google.com"
        className="m-1 h-9 w-9 rounded-full border-[0.1px] border-white uppercase leading-normal transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 dark:border-white"
        style={{
          boxShadow: isHovered2 ? '0 0 18px 5px rgba(0, 0, 255, 0.5)' : 'none'
        }}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          className="mx-auto h-full w-3 text-white hover:text-L_primary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
      </Link>
      <Link
        href="https://www.google.com"
        className="m-1 h-9 w-9 rounded-full border-[0.1px] border-white uppercase leading-normal transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 dark:border-white"
        style={{
          boxShadow: isHovered3 ? '0 0 18px 5px rgba(0, 0, 255, 0.5)' : 'none'
        }}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          className="mx-auto h-full w-3 text-white hover:text-L_primary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
      </Link>
      <Link
        href="https://www.google.com"
        className="m-1 h-9 w-9 rounded-full border-[0.1px] border-white uppercase leading-normal transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 dark:border-white"
        style={{
          boxShadow: isHovered4 ? '0 0 18px 5px rgba(0, 0, 255, 0.5)' : 'none'
        }}
        onMouseEnter={handleMouseEnter4}
        onMouseLeave={handleMouseLeave4}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          className="mx-auto h-full w-3 text-white hover:text-L_primary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          ></path>
        </svg>
      </Link>

     

    </div>



    </Wrapper>
  </section>
  )
}

export default Intro
