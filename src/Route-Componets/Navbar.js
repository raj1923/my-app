import React from "react";
import { NavLink } from "react-router-dom";
const Navbar =()=>
    {
        return<div>
            <div className="nav">
            <button><NavLink to= '/'> Home</NavLink></button>
            <button><NavLink to= '/about'> About</NavLink></button>
            <button><NavLink to='/contact'> Contact</NavLink></button>
            <button><NavLink to='/Projects'> Projects</NavLink></button>
            <button><NavLink to='/Users'> Users</NavLink></button>
            </div>
        </div>
    }

export default Navbar;