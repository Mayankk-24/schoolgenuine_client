import React from "react";
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
              <li className="text-[#737373] text-sm font-bold">About Us</li>
              <li className="text-[#737373] text-sm font-bold">Carrier</li>
              <li className="text-[#737373] text-sm font-bold">
                We are hiring
              </li>
              <li className="text-[#737373] text-sm font-bold">Blog</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">Legal</h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold">About Us</li>
              <li className="text-[#737373] text-sm font-bold">Carrier</li>
              <li className="text-[#737373] text-sm font-bold">
                We are hiring
              </li>
              <li className="text-[#737373] text-sm font-bold">Blog</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">
              Features
            </h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold">
                Business Marketing
              </li>
              <li className="text-[#737373] text-sm font-bold">
                User Analytic
              </li>
              <li className="text-[#737373] text-sm font-bold">Live Chat</li>
              <li className="text-[#737373] text-sm font-bold">
                Unlimited Support
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#252B42] text-base font-bold mb-6">
              Resources
            </h5>
            <ul className="list-none mt-4 flex flex-col gap-y-3">
              <li className="text-[#737373] text-sm font-bold">
                IOS & Android
              </li>
              <li className="text-[#737373] text-sm font-bold">Watch a Demo</li>
              <li className="text-[#737373] text-sm font-bold">Customers</li>
              <li className="text-[#737373] text-sm font-bold">API</li>
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
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <div>
            <h6 className="text-[#737373] font-bold text-sm">
              Made With Love By Mayank All Right Reserved{" "}
            </h6>
          </div>
          <div className="flex items-center gap-x-5">
            <FaFacebook color="#FF6551" size={20} />
            <FaInstagram color="#FF6551" size={20} />
            <FaTwitter color="#FF6551" size={20} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
