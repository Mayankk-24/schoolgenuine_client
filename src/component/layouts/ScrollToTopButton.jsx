import { useState, useEffect } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
// import { ArrowUpIcon } from "lucide-react"; // Icon from lucide-react

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full active:bg-blue-700 shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <IoArrowUpCircleOutline size={24} />
    </button>
  );
};

export default ScrollToTopButton;
