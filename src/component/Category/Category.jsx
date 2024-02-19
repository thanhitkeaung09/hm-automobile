import React, { useState } from "react";
import Card from "../Category/Card";
import Slider from "react-slick";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
const Category = () => {
const slider = React.useRef(null);

  const [settings, setSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  const [category, setCategory] = useState([
    {
      id: 1,
      title: "Sedans",
      content:
        "Explore our collection of stylish and comfortable sedans. Perfect for city driving.",
      imageSrc:
      // "https://heavenmall.sgp1.digitaloceanspaces.com/https://via.placeholder.com/100x100.png/CCCCCC?text=quo"
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80",
    },
    {
      id: 2,
      title: "SUVs",
      content:
        "Discover our range of powerful and spacious SUVs. Ideal for family adventures.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    },
    {
      id: 3,
      title: "Electric Cars",
      content:
        "Experience the future with our eco-friendly electric cars. Go green with style.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    },
    {
      id: 4,
      title: "Sports Cars",
      content:
        "Feel the thrill of speed with our high-performance sports cars. Unleash your inner racer.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
      id: 5,
      title: "Electric Cars",
      content:
        "Experience the future with our eco-friendly electric cars. Go green with style.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    },
    {
      id: 6,
      title: "Sports Cars",
      content:
        "Feel the thrill of speed with our high-performance sports cars. Unleash your inner racer.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
  ]);
  return (
    <div className="w-[95%] md:w-[85%] mx-auto py-16">
      <div className="relative flex items-center pb-16">
        <div className="w-80 border border-primary-dark"></div>
        <h1 className="pl-3 text-3xl font-bold text-gray-800 me-3">
          Our Categories
        </h1>
        <div className="w-10 border border-primary-dark me-3"></div>
        <p className="me-2">The Best Categories of Our Automobile</p>
        <div className="w-72 border border-primary-dark me-3"></div>
        {/* Card Section */}
      </div>
      <Slider ref={slider} {...settings}>
          {category.map((el, index) => {
            return (
              <div
              key={index}
              className=""
            >
              <Card data={el} />
            </div>
            );
          })}
        </Slider>
      {/* <div className="grid grid-cols-12 gap-6">
        {category.map((el, index) => {
          return (
            <div
              key={index}
              className="col-span-6 md:col-span-4 lg:col-span-3"
            >
              <Card data={el} />
            </div>
          );
        })}

        <div className="col-span-6"></div>
      </div> */}
    </div>
  );
};

export default Category;
