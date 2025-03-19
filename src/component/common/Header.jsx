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
      <main className="max-w-[1322px] mx-auto px-24 py-5 flex items-center justify-between">
        <div>
          <h3 className="text-[#252B42] text-2xl font-bold">Brandname</h3>
        </div>
        <div className="flex justify-between items-center gap-x-7">
          {Links.map((link, index) => {
            return (
              <a className="text-[#737373] font-bold text-sm" key={index}>
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-10 pr-12">
          <button
            className="text-[#FF6551] outline-none border-none"
            style={{ padding: "0px", background: "transparent" }}
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
