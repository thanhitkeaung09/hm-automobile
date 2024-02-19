import React, { useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
const Carousel = () => {
const slider = React.useRef(null);

  const [settings, setSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
   const [products, setProducts] = useState([
    {
      id: 1,
      name: "Rosina Casper Jr.",
      content:
        "Explore our collection of stylish and comfortable sedans. Perfect for city driving.",
      imageSrc:[
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",

      ],
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true,
    },

    {
      id: 2,
      name: "SUVs",
      content:
        "Discover our range of powerful and spacious SUVs. Ideal for family adventures.",
      imageSrc:[
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",

      ],
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "Yangon",
      price: "1838",
      discount_price: "4746",
      is_usd: true,
    },

    {
      id: 3,
      name: "Electric Cars",
      content:
        "Experience the future with our eco-friendly electric cars. Go green with style.",
      imageSrc:[
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",

      ],
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "Mandalay",
      price: "1838",
      discount_price: "4746",
      is_usd: true,
    },
    {
      id: 4,
      name: "Sports Cars",
      content:
        "Feel the thrill of speed with our high-performance sports cars. Unleash your inner racer.",
      imageSrc:[
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      ],
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MyitKyiNa",
      price: "1838",
      discount_price: "4746",
      is_usd: true,
    },
  ]);
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
    <div className=" mx-auto py-16">

      <Slider ref={slider} {...settings}>
          {products.map((el, index) => {
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
    </div>
  );
};

export default Carousel;
