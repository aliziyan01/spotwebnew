'use client'
import React from "react";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import logo from "@/assets/images/Artboard 1.png";
import { TestimonalsData } from "../data/testimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";



const testimonials = () => {
  return (
    <section 
    id="testimonials" 
    className="bg-1 pt-20">
      <Wrapper  >

      <div className="  pb-6">
          <div className="items-center   md:flex-row item-center text-white pt-6">
            <div className="text-center ">
              <h1 className="text-center font-black text-3xl md:text-4xl ">
              OUR CLIENT&lsquo;S STORIES
              </h1>
              <hr className="border-L_primary m-auto w-24 border-t-4 rounded-sm "></hr>
              <p className="mt-6">
                Empowering people in a new digital journey
                <br></br>
                with my super services
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col h-full pt-20 pb-5">
            <Swiper
              breakpoints={{
                100: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                550: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="max-w-[100%] lg:max-w-[100%]"
            >
              {TestimonalsData.map((item, i) => (
                <SwiperSlide key={item.id}>
                  <div className="test-card flex flex-row lg:w-[320px] overflow-hidden cursor-pointer pb-12 justify-center">
                    <div className="test-card-cl bg-L_primary  w-80 rounded-2xl   h-[500px]">
                      <div key={i} className="relative">
                        <Image
                          className="w-28 h-[90px] pt-5"
                          src={logo}
                          alt="SpotLinks"
                        />
                        <div className="rounded-bl-[250px] rounded-tr-2xl  h-40 w-[165px] absolute right-0 top-0  overflow-hidden">
                          <Image
                            className="object-cover"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                      </div>
                      <div className="pt-28 px-6 pb-6">
                        <p className="text-gray-400 text-[16px] overflow-y-auto  max-h-48 "style={{ scrollbarWidth: 'none' }}>
                          {item.description}
                        </p>
                        <h2 className="text-white font-bold text-2xl mt-4">
                          {item.name}
                        </h2>
                        <p className="text-gray-400 text-[16px]">
                          {item.position}, {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </Wrapper>
    </section>
  );
};

export default testimonials;