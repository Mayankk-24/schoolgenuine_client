import React from "react";
import { IoIosHeart } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

function Pricing() {
  const Pricing = [
    {
      id: 1,
      tag: false,
    },
    {
      id: 2,
      tag: true,
    },
    {
      id: 3,
      tag: false,
    },
  ];
  const features = [
    {
      id: 1,
      name: "Unlimited product updates",
      bedge: true,
    },
    {
      id: 2,
      name: "Unlimited product updates",
      bedge: true,
    },
    {
      id: 3,
      name: "Unlimited product updates",
      bedge: true,
    },
    {
      id: 4,
      name: "1GB  Cloud storage",
      bedge: false,
    },
    {
      id: 5,
      name: "Email and community support",
      bedge: false,
    },
  ];
  return (
    <>
      <div className="py-24">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col gap-y-3">
            <h6 className="text-[#FF6551] text-sm font-bold">
              Practice Advice
            </h6>
            <h2 className="text-[#252B42] text-2xl font-bold ">
              Watch our Courses
            </h2>
            <p className="text-[#737373] text-sm font-normal ">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-18">
            {Pricing.map((item, index) => {
              return (
                <div
                  className="relative w-[360px] bg-white shadow-lg rounded-md py-12 px-10 hover:-translate-y-1.5 transition-transform duration-200 ease-linear"
                  key={index}
                >
                  <div>
                    <div className="bg-[#FF6551] rounded-full size-24 flex justify-center items-center">
                      <IoIosHeart color="#fff" size={48} />
                    </div>
                    {item.tag && (
                      <div className="size-[90px] bg-[#E77C40] flex justify-center items-center rounded-full text-white font-bold text-2xl absolute -right-10 -top-10">
                        New
                      </div>
                    )}
                  </div>
                  <div className="mt-8 flex flex-col gap-y-5">
                    <h3 className="text-[#252B42] font-bold text-2xl">FREE</h3>
                    <h6 className="text-[#737373] text-sm font-bold">
                      Organize across all apps by <br />
                      hand
                    </h6>
                    <div>
                      <h2 className="text-[#FF6551] text-[40px] font-bold">
                        19$
                      </h2>
                      <h6 className="text-[#8EC2F2] text-sm font-bold">
                        Per Month
                      </h6>
                    </div>
                    <p className="text-[#737373] text-sm font-normal ">
                      Slate helps you see how <br /> many more days you need...
                    </p>
                  </div>
                  <div className="my-7">
                    <button
                      className="text-white font-bold text-sm w-full hover:shadow-xl hover:scale-105 transition-all duration-200"
                      style={{ background: "#FF6551", borderRadius: "5px" }}
                    >
                      Try for free
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    {features.map((item, index) => {
                      return (
                        <div className="flex items-center gap-x-5" key={index}>
                          <div
                            className={` ${
                              item.bedge ? "bg-[#2DC071]" : "bg-[#BDBDBD]"
                            } size-8 rounded-full flex items-center justify-center text-white`}
                          >
                            <IoCheckmark color="#fff" size={24} />
                          </div>
                          <h6 className="text-[#252B42] text-sm font-bold">
                            {item.name}
                          </h6>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
