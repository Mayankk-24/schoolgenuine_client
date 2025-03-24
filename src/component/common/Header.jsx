import { Button, Drawer } from "@mui/material";
import React from "react";
import { FaArrowRightLong, FaBarsStaggered } from "react-icons/fa6";

function Header() {
  const Links = [
    { name: "Home", url: "/" },
    { name: "Product", url: "/product" },
    { name: "Pricing", url: "/pricing" },
    { name: "Contact", url: "/contact" },
  ];
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <main className="max-w-[1322px] mx-auto px-10 md:px-24 py-5 flex items-center justify-between">
        <div>
          <h3 className="text-[#252B42] text-2xl font-bold hover:cursor-pointer">
            Brandname
          </h3>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-7">
            {Links.map((link, index) => {
              return (
                <a
                  className="text-[#737373] font-bold text-lg hover:cursor-pointer"
                  key={index}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:pr-12">
            <button
              className="text-[#FF6551] hover:bg-[#FF6551] hover:text-white transition-all duration-300 ease-in-out hover:shadow-xl"
              style={{ border: "1px solid #FF6551" }}
            >
              Login
            </button>
            <button className="text-white font-bold flex items-center gap-3 bg-[#FF6551] hover:scale-105 transition duration-200 hover:shadow-gray-900 hover:shadow-2xl">
              JOIN US <FaArrowRightLong />{" "}
            </button>
          </div>
        </div>
        <div className="block md:hidden">
          <Button onClick={toggleDrawer(true)} sx={{ bgcolor: "white" }}>
            <FaBarsStaggered size={25} />
          </Button>
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                width: 250,
              },
            }}
          >
            <div className="flex flex-col justify-between items-center gap-y-5 px-3 py-4 w-full">
              {Links.map((link, index) => (
                <div
                  className="w-full text-[#737373] flex justify-center rounded-lg transition-all duration-300 ease-in-out 
                     hover:bg-gray-400/70 hover:text-white active:bg-gray-500 focus:bg-gray-400/70 active:text-white focus:text-white"
                  key={index}
                >
                  <span className="font-semibold text-lg cursor-pointer py-2 w-full text-center">
                    {link.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-5 px-5">
              <button
                className="text-[#FF6551] hover:bg-[#FF6551] w-full hover:text-white transition-all duration-200 ease-linear 
               hover:shadow-xl active:scale-95 active:bg-[#e04b3f] active:text-white focus:ring-2 focus:ring-[#FF6551]"
                style={{ border: "1px solid #FF6551" }}
              >
                Login
              </button>

              <button
                className="text-white font-bold flex items-center justify-center gap-3 w-full bg-[#FF6551] 
                     hover:scale-105 transition duration-200 hover:shadow-gray-900 hover:shadow-2xl 
                     active:scale-95 active:bg-[#e04b3f]"
              >
                JOIN US <FaArrowRightLong />
              </button>
            </div>
          </Drawer>
        </div>
      </main>
    </>
  );
}

export default Header;
