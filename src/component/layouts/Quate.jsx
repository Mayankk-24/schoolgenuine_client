import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";

function Quate() {
  const Images = [
    { id: 1, src: "/Assets/fa-brands-1.png" },
    { id: 2, src: "/Assets/fa-brands-2.png" },
    { id: 3, src: "/Assets/fa-brands-3.png" },
    { id: 4, src: "/Assets/fa-brands-4.png" },
    { id: 5, src: "/Assets/fa-brands-5.png" },
    { id: 6, src: "/Assets/fa-brands-6.png" },
    { id: 1, src: "/Assets/fa-brands-1.png" },
    { id: 2, src: "/Assets/fa-brands-2.png" },
    { id: 3, src: "/Assets/fa-brands-3.png" },
    { id: 4, src: "/Assets/fa-brands-4.png" },
    { id: 5, src: "/Assets/fa-brands-5.png" },
    { id: 6, src: "/Assets/fa-brands-6.png" },
  ];

  return (
    <>
      <div className="px-48 mt-[144px] md:mt-[350px]">
        <motion.div
          className="flex flex-col gap-y-5 lg:flex-row items-center justify-between my-24"
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
        >
          <div className="relative flex items-center justify-center w-[650px] h-[300px] mb-28 md:mb-0 md:mr-20 lg:mr-0">
            {/* Faded Background Glow */}
            <div className="absolute w-[360px] h-[280px] bg-blue-200 opacity-50 rounded-full blur-xl"></div>

            {/* Background Animated Rings */}
            <motion.div
              className="absolute w-[520px] h-[420px] border-2 border-blue-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            <motion.div
              className="absolute w-[500px] h-[400px] border-2 border-blue-300 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Image with Ringing Effect */}
            <motion.div
              className="relative  overflow-hidden rounded-[50%]"
              animate={{ y: [0, -10, 0] }} // Floating effect
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <img
                src="/Assets/thumb-concept.png"
                alt="Consulting Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col gap-y-5 pr-10"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="font-bold text-[40px] text-[#252B42] before:content-[''] before:block before:bg-[#E74040] before:w-[94px] before:h-1 before:mb-5">
              Get Quality <br /> Education
            </h2>
            <p className="text-[#737373] font-normal text-sm">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics{" "}
            </p>
            <a className="text-[#FF6551] text-sm font-bold flex items-center group">
              Learn More{" "}
              <FaAngleRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scrolling Images */}
      {/* <div className="overflow-hidden w-full py-10">
        <motion.div
          className="flex gap-x-20"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          {Images.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={item.src} alt="" className="w-24 lg:w-32 " />
            </div>
          ))}
        </motion.div>
      </div> */}
    </>
  );
}

export default Quate;
