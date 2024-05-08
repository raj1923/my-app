import React from "react";
import Usersdata from "./Usersdata";
import { Link } from "react-router-dom";
const Users =()=>
    {
        return<div>
           <h1>Users</h1> 
           <table>
            <tr>
                <th>Sno</th>
                <th>Name</th>
            </tr>
            {
                Usersdata.map((eachdata)=>
                {
                    const {id, name, email} = eachdata
                    return (
                   <Link to={`/Users/${id}`}>
                   <artical className="card" >
                    <h3>{name}</h3>
                    <h3>{email}</h3>
                   </artical>
                   
                   </Link>
                   
                    )

                })
            }
           </table>
        </div>
    }

    export default Users;