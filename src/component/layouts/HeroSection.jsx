import React, { useState } from "react";
import Header from "../common/Header";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

function HeroSection() {
  const Cards = [
    {
      id: 1,
      img: "/Assets/icon cool-icon-n2.png",
      title: "Expert instruction",
      color: "#FF6551",
      text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      id: 2,
      img: "/Assets/icon cool-icon-n5.png",
      title: "Training Courses",
      color: "#2435A1",
      text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      id: 3,
      img: "/Assets/icon cool-icon-n8.png",
      title: "Lifetime access",
      color: "#FFC652",
      text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
  ];
  return (
    <>
      {/* layout */}
      <main className="relative lg:mb-[280px]">
        <div className="absolute w-full z-10 top-0">
          <Header />
        </div>
        <div className="grid grid-cols-3">
          <div className="bg-[#184C99] w-28 h-44"></div>
          <div className="w-1/2"></div>
          <div className="bg-[#184C99] h-[700px]"></div>
        </div>
        <div className="w-full flex justify-center items-center overflow-x-hidden">
          <div className="absolute top-16 mx-auto flex justify-between md:px-5 lg:px-0">
            <div className="flex flex-col px-10 md:px-0 gap-y-7 pt-16 mr-0 md:mr-24">
              <div className="flex flex-col gap-y-8">
                <h5 className="text-base text-[#FF6551] font-bold">
                  For Better Future
                </h5>
                <h1 className="text-[58px] text-[#252B42] font-bold">
                  HIGH QUALITY <br />
                  COURSES
                </h1>
                <p className="font-normal text-xl text-[#737373]">
                  Every day brings with it a fresh <br /> set of learning
                  possibilities.
                </p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="text-white font-bold text-sm bg-[#FF6551] transition-all duration-200 ease-linear hover:shadow-gray-300 hover:shadow-lg active:scale-75 flex items-center justify-center"
                  style={{ borderRadius: "5px", padding: "10px 20px" }}
                >
                  Get Quote Now
                </motion.button>

                {/* <button
                  className="text-[#FF6551] font-bold text-sm hover:bg-[#FF6551] hover:text-white transition-colors duration-300 ease-linear hover:shadow-lg active:scale-95"
                  style={{ borderRadius: "5px", border: "1px solid #FF6551" }}
                >
                  Learn More
                </button> */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="text-[#FF6551] font-bold text-sm hover:bg-[#FF6551] hover:text-white transition-colors duration-300 ease-linear hover:shadow-lg"
                  style={{ borderRadius: "5px", border: "1px solid #FF6551" }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/Assets/none.png" alt="boy" className="h-[621px]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-10 relative md:absolute z-10 px-10 md:px-0">
            {Cards.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white h-[300px] md:w-[328px] shadow-lg rounded-md mb-5 mt-4 lg:mb-0 md:mt-0 lg:mt-0 px-10 pt-5 flex flex-col gap-y-8"
                  key={index}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, 2, -2, 2, -2, 0], // Rotating slightly back and forth
                      transition: {
                        duration: 0.2,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className={`size-[70px] rounded-[10px] flex items-center justify-center hover:cursor-pointer`}
                    style={{ backgroundColor: item.color }}
                  >
                    <img src={item.img} alt="" />
                  </motion.div>
                  <div>
                    <h3 className="text-[#252B42] font-bold text-2xl after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#FF6551] after:mt-3">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm text-[#737373] font-normal">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
