import { Button, Rating } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function Review() {
  const Review = [
    {
      id: 1,
      img: "/Assets/788677fb8424863333e49c497e1680c6.jpg",
    },
    {
      id: 2,
      img: "/Assets/73461df16e658c9906c9fcab54731708.jpg",
    },
    {
      id: 3,
      img: "/Assets/6dfb3f6c6ec9b6e9414e4ea754b2d1fd.jpg",
    },
  ];
  return (
    <>
      <div>
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col gap-y-3">
            <h6 className="text-[#FF6551] text-sm font-bold">
              Practice Advice
            </h6>
            <h2 className="text-[#252B42] text-[40px] font-bold ">
              Approdable Packages
            </h2>
            <p className="text-[#737373] text-sm font-normal ">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {Review.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.3, // Stagger effect
                  }}
                  whileHover={{ y: 0 }} // Stops bounce on hover
                  className="py-12 px-16 w-[328px] cursor-pointer"
                >
                  <div className="flex justify-center mb-3">
                    <Rating
                      name="half-rating-read"
                      defaultValue={4}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="text-center mb-3">
                    <p className="text-[#737373] text-sm ">
                      Slate helps you see how many more days you need to work to
                      reach your financial goal for the month and year.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4 justify-center mt-5">
                    <div className="size-[50px] rounded-full">
                      <img
                        src={item.img}
                        alt=""
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-[#FF6551] text-sm font-bold">
                        Regina Miles
                      </h6>
                      <span className="text-[#252B42] text-xs ">Designer</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
