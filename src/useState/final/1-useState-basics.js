import React from "react";
import  { useState } from "react";
const Index = () =>
{

const [count, setCount ] = useState(0)

const increment=()=>

{

    setCount((count) => count+1);
     setCount((count) => {
        
        return   count+1});
 
}


const decs =() =>
{
setCount(count-1);


}


return(

    <div>

        <button onClick={decs} disabled = {count === 0}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
)





};

export default Index