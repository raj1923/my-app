 import React from 'react'
 import { useNavigate } from 'react-router-dom';
 const  Home =()=> {
    const navegate = useNavigate();

    const submitbutton =()=>
        {
            navegate("/Sucess")
        }

   return (
     <div><h1>HOME</h1>
     
     <button onClick={submitbutton}>Submit</button>
     
     </div>
   )
 }
 
 export default Home;