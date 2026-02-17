import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
      <footer className="bg-orange-500/10 flex flex-col justify-start items-center pt-15 pb-10 ">

        <div className="flex gap-8 grid grid-cols-1 md:grid-cols-4 ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <img
                src={assets.logo}
                alt="logo"
                className="h-10 w-10 overflow-hidden"
              />
              <span className="text-lg font-bold ">FoodieExpress</span>
            </div>
            <div>
              <p className="text-[#9c5e49]  max-w-[250px]">
                The fastest way to get your favorite meals from top-rated local
                restaurants. Satisfaction delivered.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold ">Explore</h3>
            <ul className="text-[#9c5e49] space-y-2 ">
              <li className="hover:text-orange-700 cursor-pointer">Near Me</li>
              <li className="hover:text-orange-700 cursor-pointer">Popular Cusines</li>
              <li className="hover:text-orange-700 cursor-pointer">Offers</li>
              <li className="hover:text-orange-700 cursor-pointer">Gift Cards</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold ">Company</h3>
            <ul className="text-[#9c5e49]  space-y-2">
              <li className="hover:text-orange-700 cursor-pointer">About Us</li>
              <li className="hover:text-orange-700 cursor-pointer">Careers</li>
              <li className="hover:text-orange-700 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-700 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold ">Newsletter</h3>

            <p className="text-[#9c5e49]">Stay updated with the best deals.</p>
            <div className="space-x-2">
              <input
                type="text"
                placeholder="Email"
                className="bg-white text-gray-700 p-3 rounded-xl border border-gray-200 hover:shadow-xl focus:border-orange-500 focus:ring-border-orange-500 "
              />

              <button className="bg-orange-500 p-3 rounded-xl" type="subit">
                <i className="fa-solid fa-share text-white"></i>
              </button>
            </div>
          </div>
        
        </div>

          <hr className="border-t border-gray-400/30 w-full max-w-6xl my-10"/>

        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-4">
            <div>
                <p className="text-[#9c5e49]">© 2024 FoodieExpress. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-[#9c5e49]">
              <i className="fa-solid fa-earth-asia hover:text-orange-500"></i>
              <i class="fa-solid fa-share-nodes hover:text-orange-500"></i>
              <i class="fa-regular fa-thumbs-up hover:text-orange-500"></i>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
