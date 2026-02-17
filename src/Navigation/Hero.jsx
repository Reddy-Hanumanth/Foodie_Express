import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="w-full flex justify-center mt-16 px-4">
      <div
        className="relative w-full max-w-7xl h-[440px] rounded-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
            Delicious Food, <br /> Delivered Fast
          </h1>

          <p className="text-gray-200 text-sm md:text-lg max-w-xl mb-8">
            Order from the best local restaurants with easy delivery to your
            doorstep.
          </p>

          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 bg-white rounded-xl p-3 shadow-lg w-full max-w-3xl justify-between">

            <div className="flex items-center gap-2 px-2 w-full md:w-[220px] border border-gray-200 rounded-lg h-11">
              <span className="text-orange-500">📍</span>
              <input
                type="text"
                placeholder="Madhapur, Hyderabad"
                className="w-full text-sm outline-none text-gray-700"
              />
            </div>

            <div className="flex items-center gap-2 px-3 flex border border-gray-200 rounded-lg h-11 md:w-[420px] w-full">
              <span className="text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search cuisines..."
                className="w-full text-sm outline-none text-gray-700"
              />
            </div>

            <button className="h-11 px-6 bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold rounded-lg w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
