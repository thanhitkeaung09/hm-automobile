import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import img1 from '../../assets/img/banner1.jpg'
import img2 from '../../assets/img/banner2.jpg'
const BannerCarousel = () => {
  const slides = [
    {
        url: img1
    },
    {
        url:img2
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    // Automatically change slides every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  return (
    <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
      <div className="max-w-[1400px] h-[450px] w-full  relative group z-0 rounded-xl overflow-hidden">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-700 z-0"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className=" flex justify-center py-2 absolute left-[50%] right-[50%] bottom-5">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer  text-4xl -translate-x-0 translate-y-[-50%]"
            >
              {currentIndex == slideIndex ? (
                <RxDot className="text-white" />
              ) : (
                <RxDotFilled className="text-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
