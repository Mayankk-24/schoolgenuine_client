import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

function Footer() {
  return (
    <>
      <div className="py-10">
        <div className="w-[80%] mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-5 gap-x-10">
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">
              Company Info
            </h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                About Us
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Carrier
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                We are hiring
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">Legal</h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                About Us
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Carrier
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                We are hiring
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">
              Features
            </h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Business Marketing
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                User Analytic
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Live Chat
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Unlimited Support
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">
              Resources
            </h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                IOS & Android
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Watch a Demo
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                Customers
              </li>
              <li className="text-[#737373] text-sm font-bold hover:text-[#FF6551] hover:cursor-pointer">
                API
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">
              Get In Touch
            </h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold flex items-center gap-x-3">
                <LuPhone color="#FF6551" size={20} />
                (480) 555-0103
              </li>
              <li className="text-[#737373] text-sm font-bold flex items-center gap-x-3">
                <IoLocationOutline color="#FF6551" size={30} />
                4517 Washington <br /> Ave. Manchester, Kentucky 39495
              </li>
              <li className="text-[#737373] text-sm font-bold flex items-center gap-x-3">
                <IoMail color="#FF6551" size={20} />
                debra.holt@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-full py-8">
        <div className="md:w-[80%] mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <h6 className="text-[#737373] font-bold text-sm">
              Made With Love By
              <a
                href="https://sughosh.dev/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "700" }}
              >
                {" "}
                Sughosh.
              </a>
            </h6>

            <h6 className="text-[#737373] font-bold text-sm">
              All Right Reserved
            </h6>
          </div>
          <div className="flex items-center gap-x-5">
            <FaFacebook
              className="text-[#FF6551] hover:text-[#1877F2] hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
              size={20}
            />
            <FaInstagram
              className="text-[#FF6551] hover:text-pink-600/90 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="text-[#FF6551] hover:text-[#1da1f2] hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
