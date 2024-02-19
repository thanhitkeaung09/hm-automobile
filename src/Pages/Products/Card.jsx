import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropright
      // className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropleft
      // className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

const Card = ({ data }) => {
  const slider = React.useRef(null);

  const [settings, setSetting] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow />
  });
  // console.log(data);
  const [i,setI]=useState(0);
  return (
    <div className="">
      <div className="border hover:border-primary-soft grid grid-cols-1 md:grid-cols-2 pr-3 py-3 rounded-sm mx-2 items-center mb-4 gap-3 ">
        <div className="ps-3">
          <div className="relative group">
            <img
            src={data.imageSrc[i]} 
            alt="Category Image"
            className="w-full h-auto object-cover mb-3"
          />
          <div className="bg-[#4a3f1e26]  items-center justify-center w-full h-full top-0 rounded border absolute hidden group-hover:flex transition-all duration-150">
            <Tooltip title="View Detail" arrow>
              <Button>
              <NavLink to={"/products/detail"}>
              <FaEye className="text-primary-soft text-xl"/>
              </NavLink>
              </Button>
            </Tooltip>
          </div >
          </div>
    
        <div className="container">
        <Slider ref={slider} {...settings}>
          {data.imageSrc.map((el, index) => {
            return (
              <div
              key={index}
              className=" p-1"
            >
              <div className={`border hover:border-primary-soft ${index == i && 'border-primary-soft'}`}>
              <img src={el} className="w-full" onClick={()=>setI(index)}/>

              </div>
            </div>
            );
          })}
        </Slider>
        
        </div>

        </div>
      
        <div className="">
          <p className="mb-3 text-sm uppercase text-primary-dark transition-all duration-100">{data.product_condition}</p>
          <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
          <p className="text-gray-700 mb-3">{data.content}</p>
          <p className="text-gray-700 mb-3"> Category : {data.vehicle_category}</p>
          <p className="text-gray-700 mb-3">Plate Number : {data.plate_number}</p>
          <p className="text-gray-700 mb-3">Model : {data.model}</p>
          <p className="text-gray-700 mb-3">Region : {data.license_region}</p> 
          <p className="text-gray-700 mb-3"> Price : <span className="line-through me-2">{ data.is_usd && '$'+ data.price}</span><span className="text-red-400">{data.is_usd && '$'+data.discount_price}</span></p>
          <p className="text-gray-700 mb-3"></p>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
