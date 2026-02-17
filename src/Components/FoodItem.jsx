import React, { useContext } from "react";
import { Context } from "../Context/Food_Context";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const FoodItem = ({ _id, image, name, price, description }) => {
    const { currency } = useContext(Context);

    return (
        <>
            <div className="mb-15">

                <div className="bg-white group flex flex-col justify-between h-full border border-gray-200 rounded-lg lg:max-w-[300px] max-w-[400px] md:max-w-[350px] hover:shadow-xl shadow-orange-500/10">
                    <div className=" overflow-hidden">
                        <img
                            src={image }
                            alt={name}
                            className="group-hover:scale-110 transition ease-in-out w-full h-[200px] rounded-t-lg"
                        />
                    </div>

                    <div className="px-3 py-2 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <p className="font-semibold text-lg group-hover:text-orange-500">
                                {name}
                            </p>
                            <p className="font-semibold text-lg">
                                {currency}
                                {price}
                            </p>
                        </div>
                        <p className="text-[#9c5e49] ">{description}</p>
                        <div className="flex flex-col gap-3">
                            <div className="flex text-center justify-between gap-1 bg-[#f4eae7] p-2 text-lg font-semibold rounded-lg">
                                <button className="hover:bg-white px-3 rounded-lg">-</button>
                                <p>1</p>
                                <button className="hover:bg-white px-3 rounded-lg">+</button>
                            </div>
                            <div>
                                <button className="bg-orange-500 font-semibold p-2 w-full rounded-xl text-white space-x-4 hover:bg-orange-600"><i className="fa-solid fa-cart-arrow-down "></i><span >Add</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodItem;
