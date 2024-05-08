import React from "react";
import { Link, Outlet} from "react-router-dom";
const Projects =()=>
    {
        return<div>
            <h1>Projects</h1>

        <Link to='/Projects/Oldpro'>Oldpro</Link>

        <Link to='/Projects/Ferurepro'>Ferurepro</Link>
        <Outlet></Outlet>
        </div>
    }


    export default Projects;