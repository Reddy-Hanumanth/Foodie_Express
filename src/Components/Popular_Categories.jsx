import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Popular_Categories = () => {
  return (
    <div className="max-w-6xl items-center justify-center mx-auto px-2 space-y-6 mt-15">
      <div className="flex pt-20 justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Popular Categories</h1>
        </div>
        <div>
          <Link to="/menu" className="text-orange-500 cursor-pointer hover:border-b border-orange-500 font-semibold">
            view All{" "}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 flex lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-4 pb-10">

        <div className="border border-orange-900/20 hover:border-orange-500 outline-none rounded-xl h-[200px] hover:shadow-xl transition flex flex-col items-center justify-center space-y-2 bg-[#f2efef] cursor-pointer">
          <img src={assets.Pizza_img1} alt="" className="rounded-full h-30" />
          <span className="font-semibold text-xl">Pizza</span>
        </div>

        <div className="border border-orange-900/20 hover:border-orange-500 outline-none h-[200px]  rounded-xl hover:shadow-xl transition flex flex-col items-center justify-center space-y-2 bg-[#f2efef] cursor-pointer">
          <img src={assets.Burgur_img2} alt="" className="rounded-full h-30" />
          <span className="font-semibold text-xl">Burger</span>
        </div>

        <div className="border border-orange-900/20 hover:border-orange-500 outline-none h-[200px] rounded-xl hover:shadow-xl transition flex flex-col items-center justify-center space-y-2 bg-[#f2efef] cursor-pointer">
          <img src={assets.Shushi} alt="" className="rounded-full h-30" />
          <span className="font-semibold text-xl">Shushi</span>
        </div>

        <div className="border border-orange-900/20 hover:border-orange-500 outline-none h-[200px] rounded-xl hover:shadow-xl transition flex flex-col items-center justify-center space-y-2 bg-[#f2efef] cursor-pointer">
          <img src={assets.Drinks} alt="" className="rounded-full h-30" />
          <span className="font-semibold text-xl">Drinks</span>
        </div>
      </div>
    </div>
  );
};

export default Popular_Categories;
