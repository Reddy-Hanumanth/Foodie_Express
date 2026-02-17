import React, { useContext, useEffect, useState } from "react";
import FoodItem from "../Components/FoodItem";
import { Context } from "../Context/Food_Context";
import Navbar from "../Navigation/Navbar";

const Food = () => {
  const { products, search, showSearch } = useContext(Context);
  const [filter_Food, setFilter_Food] = useState([]);
  const [category, setCategory] = useState("");

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
  }, [category, search, showSearch, products]);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-18 pt-10 bg-[#f8f6f5]">
        {/* FILTER */}
        <div className="sticky hidden md:block space-y-8 pt-4 pl-4">
          <div className="flex gap-4 items-center">
            <i className="fa-solid fa-layer-group text-2xl"></i>
            <p className="text-2xl font-bold text-[#9c5e49} tracking-wider">
              Filters
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-md font-bold text-[#9c5e49] tracking-wider">
              Categories
            </p>

            <div className="space-y-2">
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

                <i class="text-orange-700 group-hover:text-orange-500 fa-solid fa-burger"></i>
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

        {/* ORDERS */}
        <div>
          <div>
            <h3></h3>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Food;
