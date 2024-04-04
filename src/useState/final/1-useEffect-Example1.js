import React, { useEffect, useState } from "react";

 const URL ="https://jsonplaceholder.typicode.com/users";
const Index =()=>
{

const [gettingdata, changeingdata] = useState([]);
const [getloading, setloading] = useState(false);
const [geterror, seterror] = useState({
    status: false,
    mgs: ""
})


const fetchUsersdata = async( urldata)=>
{   
    setloading(true);
    seterror({status:false, msg: ""})
    try{
        
        const responce = await fetch(urldata);
    const data = await responce.json();
    changeingdata(data);
    setloading(false);
    seterror({status:false, msg: ""})
    }
    catch(e)
    {
        seterror({
            mgs:"Some Thing wrong Please Tyr Again...",
            status:true,
        })
        setloading(false);
    }
}



useEffect(()=>{

    fetchUsersdata(URL)
},[])

if(geterror.status)
{
    return <h1  style={{color:'red'}}>
        {geterror.mgs}
    </h1>
}





return(
<div>
   
    
        {getloading ?
        
        (<h1>Loding...</h1>):
       
     (<table>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
      
        
    
    {
        gettingdata.map((eachobj)=>
        {
            return <tr key={eachobj.id}>
            <th>{eachobj.id}</th>
            <th>{eachobj.name}</th>
            <th>{eachobj.phone}</th>
            <th>{eachobj.email}</th>
            </tr>
           
                              

            
                
        
        })

    }

</table>)
}
</div>
)



}

export default Index;