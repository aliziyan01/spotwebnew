'use client'
import Wrapper from "@/components/shared/Wrapper";
import { useState } from "react";
//components

interface servicesProps {
    id: number;
    name: string;
    description: string;
}

const Services : React.FC<{ services: servicesProps }> = ({services}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      className=" bg-black"
    >
      <Wrapper>

        <div className={`text-white flex items-center border-b-2 hover:border-b-0 px-4 py-1  hover:border-t-2 hover:border-r-2 ${isHovered ? 'text-white' : 'text-[#0734ce]'}`}
      style={{
    background: isHovered ? 'linear-gradient(228deg, rgba(0,0,0,1) 10%, rgba(5,37,148,1) 41%, rgba(7,52,206,1) 94%)' : 'black',
}}

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="md:px-4 px-2 md:py-5 py-3 md:text-lg text-sm h-full font-bold">{services.id}</h3>
      <h2 className="md:px-4 px-2 md:py-5 py-3 md:text-lg lg:text-xl  sm:text-sm text-[11px] font-bold text-white  w-[700px]">{services.name}</h2>
      <p className="md:px-24 px-2 sm:px-14 py-4 md:text-sm text-[10px] overflow-y-auto md:max-h-[80px] max-h-[50px]  text-slate-300  "style={{ scrollbarWidth: 'none' }}>{services.description}</p>
      <div className="px-2 py-5">
        <svg
          height="24px"
          width="24px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 185.343 185.343"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  style={{ fill: '#ffffff' }}
                  d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
      </Wrapper>
    </section>
  );
};

export default Services;
