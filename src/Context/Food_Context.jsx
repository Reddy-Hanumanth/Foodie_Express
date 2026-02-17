import React,{createContext, useState} from "react";

import { products } from "../assets/assets";
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'


export const Context = createContext();

const Food_Context = (props) => {

    const currency = '$';
    const [search, setSearch] = useState("")
    const [showSearch,setshowsearch] = useState(false)
    const [cartFood,setCartFood] = useState({})
    const navigate = useNavigate();

    const value = {
        products,
        currency,
        navigate,
        search,
        setSearch,
        showSearch,
        setshowsearch,
        cartFood,
        setCartFood
    }

  return (
    <div>
        <Context.Provider value={value} >
            {props.children}
        </Context.Provider>
    </div>
  )
}

export default Food_Context