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
    { id: 1, src: "/Assets/fa-brands-1.png" },
    { id: 2, src: "/Assets/fa-brands-2.png" },
    { id: 3, src: "/Assets/fa-brands-3.png" },
    { id: 4, src: "/Assets/fa-brands-4.png" },
    { id: 5, src: "/Assets/fa-brands-5.png" },
    { id: 6, src: "/Assets/fa-brands-6.png" },
  ];
  return (
    <>
      <div className="py-10">
        <Marquee pauseOnHover gradient>
          <div className="flex gap-x-20">
            {Images.map((item, index) => (
              <div key={index} className="flex items-center justify-center mr-7">
                <img src={item.src} alt="" className="w-24 lg:w-32 " />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default ImageSlider;
