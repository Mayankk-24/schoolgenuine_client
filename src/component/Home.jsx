import React from "react";
import HeroSection from "./layouts/HeroSection";
import Quate from "./layouts/Quate";
import Courses from "./layouts/Courses";
import Pricing from "./layouts/Pricing";
import Review from "./layouts/Review";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";
import BubbleEffect from "./layouts/BubbleEffect";
import ImageSlider from "./layouts/ImageSlider";

function Home() {
  return (
    <>
      <HeroSection />
      <Quate />
      <ImageSlider />
      <Courses />
      <Pricing />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
