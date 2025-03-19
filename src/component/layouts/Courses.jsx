import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdEye, IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

function Courses() {
  const Cards = [
    {
      id: 1,
      title: "Video in Live Action",
      subtitle: "training Courses",
      img: "/Assets/4d2ea0a76ddc0c1e5e15029c4b15ccd5.jpg",
    },
    {
      id: 2,
      title: "Every Client Matters",
      subtitle: "Books Liberary",
      img: "/Assets/8c977fbe0809eb2a0bc705473d223e20.jpg",
    },
    {
      id: 3,
      title: "Get Quality Education",
      subtitle: "Certified Teacher",
      img: "/Assets/19408dc6126b977d19a127491b9ae5b9.jpg",
    },
  ];
  return (
    <>
      <div className="bg-[#26335D] py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[80%] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-y-3 text-center md:text-left"
          >
            <h6 className="text-[#FF6551] text-sm font-bold">
              Practice Advice
            </h6>
            <h2 className="text-white text-[40px] font-bold ">
              Our Popular Courses
            </h2>
            <p className="text-white text-sm font-normal ">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </motion.div>
          <div className="w-full flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, staggerChildren: 0.3 },
                },
              }}
              className="mt-20 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-10"
            >
              {Cards.map((card, index) => {
                return (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="w-[348px] rounded-md hover:-translate-y-1.5 transition-transform duration-200 ease-linear"
                    key={index}
                  >
                    <div className="w-full h-[300px] relative">
                      <img
                        src={card.img}
                        alt=""
                        className="w-full h-full object-cover rounded-t-md"
                      />
                      <div className="bg-[#E74040] absolute top-3 left-2 text-white rounded-sm px-2 shadow-lg">
                        Sale
                      </div>
                      <div className="flex items-center justify-center w-full gap-x-2 absolute bottom-6">
                        <div className="size-10 bg-white rounded-full flex justify-center items-center">
                          <IoMdHeartEmpty size={25} />
                        </div>
                        <div className="size-10 bg-white rounded-full flex justify-center items-center">
                          <FiShoppingCart size={20} />
                        </div>
                        <div className="size-10 bg-white rounded-full flex justify-center items-center">
                          <IoMdEye size={25} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white h-[322px] w-full py-5 px-6 rounded-b-md">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-[#FF6551] font-bold text-sm ">
                          {card.subtitle}
                        </h5>
                        <div className="bg-[#26335D] w-[50px] rounded-2xl py-1 text-xs text-white flex items-center justify-center">
                          <IoMdStar color="#FFCE31" className="mr-1" /> 4.2
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-5">
                        <h5 className="text-[#252B42] font-bold text-base ">
                          {card.title}
                        </h5>
                        <p className="text-[#737373] text-sm ">
                          We focus on ergonomics and meeting <br /> you where
                          you work. It's only a <br /> keystroke away.
                        </p>
                        <div className="flex items-center gap-x-2">
                          <LuDownload color="#737373" />
                          <h6 className="text-[#737373] font-bold text-sm">
                            15 Sales
                          </h6>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col gap-y-3">
                        <div className="flex items-center gap-x-2">
                          <h5 className="text-[#BDBDBD] font-bold text-base">
                            $16.48
                          </h5>
                          <h5 className="text-[#2435A1] font-bold text-base">
                            $6.48
                          </h5>
                        </div>
                        <button
                          className="text-[#FF6551] w-fit flex items-center gap-x-4 hover:bg-[#FF6551] hover:text-white hover:shadow-lg transition-colors duration-200 group"
                          style={{
                            borderRadius: "37px",
                            border: "1px solid #FF6551",
                            fontWeight: "700",
                          }}
                        >
                          Learn More
                          <FaChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Courses;
