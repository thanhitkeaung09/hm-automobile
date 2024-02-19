import React from "react";
import Img from "../../assets/img/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiViber } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold flex items-center text-gray-400 mb-5">
            <img src={Img} alt=""  className="me-2"/> <span className="me-2">HeavenMall </span> <span className="text-sm">Myanmar</span>
          </h2>
          <p className="text-gray-400 text-sm mb-3">Address : ဘုရားလမ်းမှတ်တိုင် , Werloop Center (ယခင် AKK Shoping Mall ) , 2nd floor , သင်္ဃကျွန်းမြို့နယ် , ရန်ကုန်မြို့ </p>
          <p className="text-gray-400 text-sm mb-3">Phone no : 09753288730 </p>
          <p className="text-gray-400 text-sm mb-3">Email :heavenmelody88@gmail.com </p>
        </div>
        <div className="flex flex-wrap">
          <FaFacebook className="me-2 text-2xl"/>
          <FaInstagram className="me-2 text-2xl"/>
          <SiViber className="me-2 text-2xl" />
          <FaTelegram className="me-2 text-2xl"/>
          {/* <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-lg font-semibold mb-2">Explore</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2023 Heaven Mall. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
