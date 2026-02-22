import React, { useContext, useEffect, useState } from "react";
import FoodItem from "../Components/FoodItem";
import { Context } from "../Context/Food_Context";

const Food = () => {
  const { products } = useContext(Context);
  const [filter_Food, setFilter_Food] = useState([]);
  const [category, setCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (e) => {
    setCategory(e.target.value);
  };

  const Food_filter = () => {
    let productsCopy = products.slice();
    if (category) {
      productsCopy = productsCopy.filter((item) => item.category === category);
    }
    setFilter_Food(productsCopy);
  };

  useEffect(() => {
    Food_filter();
  }, [category, products]);

  return (
    <>
    <div  onClick={() => setShowFilters(!showFilters)} className="fixed z-[100] border border-orange-500 md:hidden flex items-center gap-2 top-20 left-5 z-50 px-5 py-2 rounded bg-gray-200">
              <i className="fa-solid fa-layer-group text-md text-orange-500"></i>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-md font-bold text-[#9c5e49] tracking-wider"
              >
                {showFilters ? "Close Filter" : "Filter"}
              </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-18 bg-[#f8f6f5] md:pt-12">
        {/* FILTER */}
        <div className="space-y-3  pt-4 pl-4 grid grid-cols-1 md:grid-cols-2">
          <div
            className={`${showFilters ? "block" : "hidden"} md:block fixed md:static top-30 left-4 md:right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none space-y-2 rounded-lg md:rounded-none z-40 space`}
          >
              <p className="text-md font-bold text-[#9c5e49] tracking-wider">
                Categories
              </p>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="All Items"
                  name="category"
                />
                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-burger"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  All Items
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="Fast Food"
                  name="category"
                  onChange={toggleCategory}
                />

                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-burger"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  Fast Food
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="Italian"
                  name="category"
                  onChange={toggleCategory}
                />
                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-pizza-slice"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  Italian
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="Indian"
                  name="category"
                  onChange={toggleCategory}
                />
                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-drumstick-bite"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  Indian
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="South Indian"
                  name="category"
                  onChange={toggleCategory}
                />
                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-gopuram"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  South Indian
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="Chinese"
                  name="category"
                  onChange={toggleCategory}
                />
                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-bowl-food"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  Chinese
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="Desserts"
                  name="category"
                  onChange={toggleCategory}
                />
                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-cake-candles"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  Desserts
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  className="hidden peer"
                  value="Drinks"
                  name="category"
                  onChange={toggleCategory}
                />
                <i className="text-orange-700 group-hover:text-orange-500 fa-solid fa-martini-glass-citrus"></i>
                <span className="text-gray-700 peer-checked:text-orange-500 peer-checked:font-bold">
                  Drinks
                </span>
              </label>
            </div>
        </div>

        {/* FOOD LIST */}
        <div className="space-y-8 flex flex-col items-center justify-center">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold">Explore Our Menu</h1>
            <p className="text-[#9c5e49] ">
              Discover 120+ delicious dishes prepared with love.
            </p>
          </div>

          <div className="grid grid-cols-1 w-full md:w-auto md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {filter_Food.map((item, index) => (
              <FoodItem
                key={index}
                _id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>


      </div>
    </>
  );
};

export default Food;
