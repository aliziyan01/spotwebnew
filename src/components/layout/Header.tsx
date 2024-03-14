'use client';
import Link from "next/link";
import logo from "@/assets/images/Artboard 1.png";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import React, { useState } from 'react';
import { home, close, menu } from 'ionicons/icons';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for menu visibility

  // Function to toggle menu visibility
  function toggleMenu() {
    setMenuOpen(!isMenuOpen); // Toggle the menu state
  }

  return (
    
    <div className="sticky top-0 z-10 ">
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"async />
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"defer/>
      <header className="md:sticky md:top-0 md:z-10 bg-black text-white items-center">
        <Wrapper>
          <div className="flex md:justify-between mx-auto py-2">
            <div>
              <Image className="w-28 mt-2 h-[70px]" src={logo} alt="SpotLinks" />
            </div>
            <div className={`nav-links md:static absolute bg-black md:min-h-fit min-h-[5vh] ${isMenuOpen ? 'right-0' : '-right-full'} top-0 md:w-auto w-full flex flex-col items-start px-5 transition-all duration-300`}>
              <ul className={`flex ${isMenuOpen ? 'mt-4' : 'mt-0'} md:flex-row flex-col md:space-x-8 p-5 md:font-semibold md:items-center pb- w-full`}>
                <li className="pt-2 ">
                  <Link href={"/"}>Home</Link>
                  <hr className="mt-1 border border-L_primary w-full md:border-hidden " />
                </li>
                <li className="pt-2 ">
                  <Link href={"#services"}>Services</Link>
                  <hr className="mt-1 border border-L_primary w-full md:border-hidden" />
                </li>
                <li className="pt-2  ">
                  <Link href={"#about"}>About us</Link>
                  <hr className="mt-1 border border-L_primary w-full md:border-hidden" />
                </li>
                <li className="pt-2  ">
                  <Link href={"#testimonials"}>Testimonials</Link>
                  <hr className="mt-1 border border-L_primary w-full md:border-hidden" />
                </li>
                <li className="pt-2  md:bg-L_primary md:rounded-3xl md:px-3 md:pt-2 md:pb-1  items-center ">
                  <Link href={"#contact"}>Contact</Link>
                  <hr className="mt-1 border border-L_primary w-full md:border-hidden" />
                </li>
              </ul>
            </div>
            <div className="md:hidden flex justify-end items-center w-full">
              <IonIcon icon={isMenuOpen ? close : menu} onClick={toggleMenu} className="text-3xl cursor-pointer text-white" />
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Header;
