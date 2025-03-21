import React from "react";
import Marquee from "react-fast-marquee";

function ImageSlider() {
  const Images = [
    { id: 1, src: "/Assets/fa-brands-1.png" },
    { id: 2, src: "/Assets/fa-brands-2.png" },
    { id: 3, src: "/Assets/fa-brands-3.png" },
    { id: 4, src: "/Assets/fa-brands-4.png" },
    { id: 5, src: "/Assets/fa-brands-5.png" },
    { id: 6, src: "/Assets/fa-brands-6.png" },
    { id: 7, src: "/Assets/fa-brands-1.png" },
    { id: 8, src: "/Assets/fa-brands-2.png" },
    { id: 9, src: "/Assets/fa-brands-3.png" },
    { id: 10, src: "/Assets/fa-brands-4.png" },
    { id: 11, src: "/Assets/fa-brands-5.png" },
    { id: 12, src: "/Assets/fa-brands-6.png" },
  ];
  return (
    <>
      <div className="py-10">
        <Marquee pauseOnHover gradient>
          <div className="flex items-center gap-x-0 md:gap-x-20">
            {Images.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center mr-20"
              >
                <img src={item.src} alt="" className="w-16 lg:w-20" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default ImageSlider;
