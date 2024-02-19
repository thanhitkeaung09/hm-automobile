import React from "react";

const Card = ({ data }) => {
  // console.log(data);
  return (
    <div className="px-3">
      <div className="border p-4  rounded-sm group hover:border-primary-soft transition-all duration-300  overflow-hidden">
        <img
          src={data.imageSrc}
          alt="Category Image"
          className="w-full h-[200px] object-contain group-hover:scale-110 transition-all duration-100   mr-6"
        />
        <div className="">
          <h2 className="text-xl font-semibold mb-2 text-center">{data.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
