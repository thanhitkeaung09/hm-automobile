import React, { useState } from "react";
import Card from "./Card";

import { NavLink } from "react-router-dom";
import Carousel from "./Carousel/Carousel";

const Products = () => {
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
  const [category,setCategory] = useState(
    [
        {
            id:1,
            name:"Sedans"
        },
          {
            id:2,
            name:"SUVs"
        },
          {
            id:3,
            name:"Electric Cars"
        },
          {
            id:4,
            name:"Sports Car"
        },

  ]
  )
  return (
    <div className="w-[95%] md:w-[85%] mx-auto py-16">
      <div className="">
      <Carousel/>
      <div className="flex items-center justify-end mb-4">
        <p className="me-2">Filtered By Category : </p>
        <div className="w-[200px] px-2 py-1 bg-[#f7df99a3] rounded-xl">
            <select className="w-full outline-none bg-[#f7df99a3]" name="" id="">
                {category.map(el=><option key={el.id} value={el.name}>{el.name}</option>)}
                
            </select>
        </div>
      </div>
      <div className="grid grid-cols-2">
      {products.map((el, index) => {
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

export default Products;
