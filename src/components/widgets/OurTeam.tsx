'use client'
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import { ourTeamData } from "../data/ourTeamData";
import Link from "next/link";

const OurTeam = () => {
  const [hoveredId, setHoveredId] = useState(0);
  const [hoveredId2, setHoveredId2] = useState(0);
  const [hoveredId3, setHoveredId3] = useState(0);

  const handleMouseEnter = (id:number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(0);
  };
  const handleMouseEnter2 = (id:number) => {
    setHoveredId2(id);
  };

  const handleMouseLeave2 = () => {
    setHoveredId2(0);
  };

  const handleMouseEnter3 = (id:number) => {
    setHoveredId3(id);
  };

  const handleMouseLeave3 = () => {
    setHoveredId3(0);
  };


  const [hoveredId4, setHoveredId4] = useState(0);
  const handleMouseEnter4 = (id:number) => {
    setHoveredId4(id);
  };

  const handleMouseLeave4 = () => {
    setHoveredId4(0);
  };


  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 26%, rgba(5,37,148,1) 77%)",
      }}
      id=""
      className="pt-20"
    >
      <Wrapper>
        <div className="pb-6 uppercase">
          <div className="pb-10">
            <div className="text-center ">
              <h1 className="text-center font-bold text-3xl md:text-4xl text-white ">
                OUR TEAM
              </h1>
              <hr className="border-L_primary m-auto w-24 border-t-4 rounded-sm"></hr>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 ">
            {ourTeamData.map((item) => (
              <div
                key={item.id}
              >
                <div className=" rounded-2xl lg:h-[400px] bg-black md:h-[350px] sm:h-[300px] h-[270px] overflow-hidden relative cursor-pointer"
                  onMouseEnter={() => handleMouseEnter2(item.id)}
                  onMouseLeave={handleMouseLeave2}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className={`transition duration-300 object-cover w-full h-full  ${
                      hoveredId2 === item.id ? "opacity-30" : "opacity-100"
                    }`}
                  />
                  <div className={`absolute inset-0 flex flex-col justify-center items-center transition duration-300 ${hoveredId2 === item.id ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex items-center">
                      <svg className="lg:h-14 lg:mr-4 mr-1 h-10" fill="#052594" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" stroke="#052594"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.8827 33.8360 C 16.0702 28.0469 12.3671 20.6640 16.7499 16.2813 C 17.0077 16.0234 17.2890 15.7656 17.5468 15.5078 C 18.8827 14.2422 20.1718 14.3125 21.3202 15.9297 L 24.3671 20.2656 C 25.3983 21.7656 25.1405 22.6094 24.0390 23.7813 L 23.0780 24.8360 C 22.7265 25.1640 22.8671 25.6094 23.0312 25.8906 C 23.4765 26.7344 24.7421 28.2344 26.1014 29.5938 C 27.5077 31.0000 28.9374 32.1953 29.8280 32.6875 C 30.1562 32.875 30.6249 32.9219 30.9296 32.6406 L 31.9374 31.6797 C 33.0624 30.5781 33.9765 30.2969 35.4296 31.3281 C 37.4452 32.7578 38.6640 33.6016 39.8593 34.4219 C 41.3358 35.5000 41.6874 36.8360 40.1874 38.1953 C 39.9296 38.4531 39.6952 38.7344 39.4374 38.9922 C 35.0546 43.3516 27.6952 39.6484 21.8827 33.8360 Z"></path></g></svg>
                      <div className="text-white  text-[12px] md:text-[14px] lg:text-[15px]">
                        <h2>PHONE</h2>
                        <h2 className="text-white font-bold text-[12px] md:text-[14px] lg:text-[15px] ">
                          {item.phone}
                        </h2>
                      </div>
                    </div>
                    <div className="flex items-center mt-6">
                      <svg className="lg:h-14 lg:mr-4 mr-1 h-10" fill="#052594" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"></path></g></svg>
                      <div className="text-white  text-[12px] md:text-[14px] lg:text-[15px]">
                        <h2>EMAIL</h2>
                        <h2 className="text-white font-bold text-[12px] md:text-[14px] lg:text-[15px] ">
                          {item.email}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className=" flex justify-center lg:text-xl md:text-lg text-sm text-white ">{item.name}</h3>
                  <h4 className="flex justify-center text-slate-400">{item.title}</h4>
                  <div className="flex justify-center pt-4 px-4 pb-16 ">
                    <Link
                      href={item.facebook}
                      className="m-1 h-9 w-9 rounded-full bg-black  uppercase leading-normal shadow-md shadow-L_primary transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black 5 focus:outline-none focus:ring-0 dark:border-white"
                      style={{
                        boxShadow: hoveredId === item.id ? '0 0 18px 5px rgba(0, 0, 255, 0.5)' : 'none'
                      }}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
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
        href={item.linkedin}
        className="m-1 h-9 w-9 rounded-full bg-black  uppercase leading-normal shadow-md shadow-L_primary transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black 5 focus:outline-none focus:ring-0 dark:border-white"
         style={{
            boxShadow: hoveredId3 === item.id ? '0 0 18px 5px rgba(0, 0, 255, 0.5)' : 'none'
          }}
          onMouseEnter={() => handleMouseEnter3(item.id)}
          onMouseLeave={handleMouseLeave3}
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

      <Link
  href={item.instagram}
  className="m-1 h-9 w-9 rounded-full bg-black  uppercase leading-normal shadow-md shadow-L_primary transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black 5 focus:outline-none focus:ring-0 dark:border-white"
  style={{
    boxShadow: hoveredId4 === item.id ? '0 0 18px 5px rgba(0, 0, 255, 0.5)' : 'none'
  }}
  onMouseEnter={() => handleMouseEnter4(item.id)}
  onMouseLeave={handleMouseLeave4}
>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram text-white mx-auto h-full w-3  hover:text-L_primary" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
</Link>
    
                  
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OurTeam;
