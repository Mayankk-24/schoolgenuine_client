import { Button } from "@mui/material";
import React from "react";

function Contact({id}) {
  return (
    <>
      <div id={id} className="flex justify-center py-32">
        <div className="px-6 md:px-0">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <h6 className="text-[#FF6551] text-sm font-bold text-center">
              Newsletter
            </h6>
            <h2 className="text-[#252B42] text-2xl font-bold text-center">
              Most Popular Courses
            </h2>
            <p className="text-[#737373] text-sm font-normal text-center ">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="flex items-center mt-12">
            <input
              type="text"
              placeholder="Your email"
              className="bg-[#E5E5E5] w-full py-3 pl-4 rounded-tl-md rounded-bl-md focus:outline-none"
            />
            <Button
              variant="contained"
              sx={{
                height: "48px",
                background: "#FF6551",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
                fontWeight: 600,
                "&:hover": {
                  background: "#E04A37",
                },
                transition:'all 0.3s ease-in-out'
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
