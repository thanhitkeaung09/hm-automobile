import React, { useState } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Feature = () => {
  const [category, setCategory] = useState([
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
  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-16">
      <div className="flex justify-between items-center pb-16">
      <div className="relative flex items-center ">
        <div className="w-80 border border-primary-dark"></div>
        <h1 className="pl-3 text-3xl font-bold text-gray-800 me-3">
          Feature Products
        </h1>
       
        {/* <h1 className="pr-3 text-3xl font-bold text-gray-800">
          Feature Products
        </h1>
        <div className="w-80 h-1 bg-primary-dark"></div> */}

        {/* Card Section */}
      </div>
        <NavLink to="/products" className="text-gray-600">
            See All
        </NavLink>
      </div>
     
      
      <div className="">
        <div className="flex justify-between">
        <div className=""></div>
          <div className="">
           
          </div>
        </div>
      <div className="grid grid-cols-2">
      {category.map((el, index) => {
            return (
              <div key={index} className="col-span-1">
                <Card data={el} />
              </div>
            );
          })}
      </div>
      </div>
    </div>
  );
};

export default Feature;
