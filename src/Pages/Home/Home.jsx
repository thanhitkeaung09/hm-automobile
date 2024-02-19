import React from "react";
import BannerCarousel from "../../component/BannerCarousel/BannerCarousel";
import Category from "../../component/Category/Category";
import Feature from "../../component/Feature/Feature";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <Category />
      <Feature />
     
    </div>
  );
};

export default Home;
