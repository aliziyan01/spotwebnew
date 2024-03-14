// pages/portfolio.js
"use client";
import { useMemo, useState } from "react";
import Project from "@/components/widgets/Project";
import Wrapper from "../shared/Wrapper";
import { projectsData } from "../data/projectData";

import { StaticImageData } from "next/image";
import React, { useEffect } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string | StaticImageData;
}



const Portfolio = () => {
  const [category, setCategory] = useState("ALL");
  const [showMore, setShowMore] = useState(false);



  const [viewportWidth, setViewportWidth] = useState(0);

  const getInitialProjects = () => {
    if (viewportWidth >= 1024) {
      // Large screen
      return 2;
    } else if (viewportWidth >= 768) {
      // Medium screen
      return 2;
    } else if (viewportWidth >= 382 && viewportWidth <= 509) {
      // Width between 382px and 509px
      return 2;
    } else {
      // Small screen
      return 2;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return category === "ALL"
      ? projectsData
      : projectsData.filter((project) => project.category === category);
  }, [category]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setShowMore(false); // Reset showMore when category changes
  };

  return (
    <section id="portfolio" // Removed the colon after "id"
      style={{
        background:
          "radial-gradient(circle, rgba(7, 52, 206, 0.873566614) 0%, rgba(0, 0, 0, 1) 17%",
      }}
    >
      <Wrapper>
        <div className=" items-center pt-16 ">
          <div className=" absolute blur-[100px] -z-20 bg-L_primary w-96 h-96 mt-[7%] right-[40%] rounded-full  "></div>
          <h1 className="text-center text-3xl md:text-4xl font-bold text-white">
            Portfolio
          </h1>
          <hr className="border-L_primary m-auto w-24 border-t-4 rounded-sm "></hr>

          <div
            className="py-2 mt-14  rounded-full   lg:max-w-[460px] m-auto md:max-w-[360px] sm:max-w-[360px] max-w-[330px] "
            style={{
              background:
                "linear-gradient(82deg, rgba(0,0,0,1) 0%, rgba(2,25,111,1) 28%,rgba(2,25,111,1) 72%, rgba(0,0,0,1) 100%)",
            }}
          >
            <div className="flex justify-center space-x-4 text-white  ">
              <button
                onClick={() => handleCategoryChange("ALL")}
                className={`btn lg:text-[16px] md:text-[13px] text-[11px] lg:px-5 md:px-3 px-3 py-1 ${
                  category === "ALL" ? "bg-L_primary" : ""
                } rounded-full `}
              >
                ALL
              </button>
              <button
                onClick={() => handleCategoryChange("UI/UX")}
                className={`btn lg:text-[16px] md:text-[13px] text-[11px] lg:px-5 md:px-3 px-3 py-1 ${
                  category === "UI/UX" ? "bg-L_primary" : ""
                } rounded-full`}
              >
                UI/UX
              </button>
              <button
                onClick={() => handleCategoryChange("WEB")}
                className={`btn lg:text-[16px] md:text-[13px] text-[11px] lg:px-5 md:px-3 px-3 py-1 ${
                  category === "WEB" ? "bg-L_primary" : ""
                } rounded-full`}
              >
                WEB
              </button>
              <button
                onClick={() => handleCategoryChange("MARKETING")}
                className={`btn lg:text-[16px] md:text-[13px] text-[11px] lg:px-5 md:px-3 px-3 py-1 md:py-2 ${
                  category === "MARKETING" ? "bg-L_primary" : ""
                } rounded-full`}
              >
                MARKETING
              </button>
            </div>
          </div>
          <div className={`flex gap-y-4 mt-8 flex-wrap justify-center ${showMore ? 'transition-all duration-700 ease-in-out opacity-90 max-h-full' : 'transition-all duration-500 ease-in-out opacity-65 max-h-[350px]'}`}>
  {filteredProjects
    .slice(0, showMore ? filteredProjects.length : getInitialProjects())
    .map((project) => (
      <Project key={project.id} project={project} />
    ))}
</div>

          {!showMore && (
            <div
              className="flex justify-center mt-10 pb-10 transition-all "
              style={{ transitionDelay: "1s" }}
            >
              <button
                onClick={handleShowMore}
                className="btn lg:text-[16px] md:text-sm text-[12px] text-white lg:px-6 md:px-4 px-3 py-2 items-center bg-L_primary rounded-full"
              >
                Show More
              </button>
            </div>
          )}
          {showMore && (
            <div
              className="flex justify-center mt-10 pb-10 transition-all opacity-100"
              style={{ transitionDelay: "1s" }}
            >
              <button
                onClick={handleShowLess}
                className="btn lg:text-[16px] md:text-sm text-[12px] lg:px-6 md:px-4 px-3 py-2 text-white bg-L_primary rounded-full"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
