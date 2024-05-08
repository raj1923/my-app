import React from "react";
import { useParams } from "react-router-dom";
import Usersdata from "./Usersdata";
const Userdetais =()=>
    {
        const {userid} = useParams();
        console.log(userid,"userdata")
        const usedetais = Usersdata.find((eachdata)=>eachdata.id == userid
    );
        console.log(usedetais)
        return<div>
            <h1>User Details</h1>
            <h1>{usedetais.name}</h1>
            <h1>{usedetais.email}</h1>
            <h1>{usedetais.phone}</h1>
            <h1>{usedetais.website}</h1>
            <h1>{usedetais.address.city}</h1>
            
        </div>
    }

export default Userdetais;