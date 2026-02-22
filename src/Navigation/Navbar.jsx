import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Context } from "../Context/Food_Context";

const Navbar = () => {
  const {cartCount} = useContext(Context)

  return (
    <div className="sticky top-0 z-[100] flex justify-between items-center  p-5 bg-[#efeded]/80 border-b border-gray-300/50 h-18">
      {/* logo */}
      <Link to='/' className="flex justify-between items-center space-x-3">
        <img src={assets.logo} alt="logo" className="h-15 w-15 overflow-hidden"/>
        <span className="text-xl font-bold ">FoodieExpress</span>
      </Link>

     <div className="flex justify-between space-x-22 items-center">
        {/* Nav Components */}
        <div className="hidden sm:flex  justify-between space-x-5 font-semibold">
          <Link to='/' className="cursor-pointer hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all">
            Home
          </Link>
          <Link to='/menu' className="cursor-pointer hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all">
            Menu
          </Link>
          <p className="cursor-pointer hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all">
            About Us
          </p>
        </div>

        {/* Cart section */}
        <div className=" flex justify-between space-x-4 items-center">
          <div className="relative border h-10 w-10 flex items-center justify-center text-orange-500/80 hover:text-orange-600 rounded-3xl">
            <i className="fa-solid fa-cart-plus text-xl cursor-pointer"></i>
            <span className="absolute -top-1.5 -right-0.5 z-10 min-w-[18px] flex items-center justify-center h-[18px font-semibold rounded-full bg-[#efeded]">{cartCount}</span>
          </div>

          <img src={assets.profilePic} alt="profile" className="h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

