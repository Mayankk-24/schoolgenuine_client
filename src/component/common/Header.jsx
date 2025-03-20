import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  const Links = [
    { name: "Home", url: "/" },
    { name: "Product", url: "/product" },
    { name: "Pricing", url: "/pricing" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <>
      <main className="max-w-[1322px] mx-auto md:px-24 py-5 flex items-center justify-between">
        <div>
          <h3 className="text-[#252B42] text-2xl font-bold hover:cursor-pointer">Brandname</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-7">
          {Links.map((link, index) => {
            return (
              <a className="text-[#737373] font-bold text-lg hover:cursor-pointer" key={index}>
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 pr-12">
          <button
            className="text-[#FF6551] hover:bg-[#FF6551] hover:text-white transition-all duration-300 ease-in-out hover:shadow-xl"
            style={{border:'1px solid #FF6551'}}
          >
            Login
          </button>
          <button className="text-white font-bold flex items-center gap-3 bg-[#FF6551] hover:scale-105 transition duration-200 hover:shadow-gray-900 hover:shadow-2xl">
            JOIN US <FaArrowRightLong />{" "}
          </button>
        </div>
      </main>
    </>
  );
}

export default Header;
