import React, {useState}from "react";


const Index =() =>
{

    const objdata={

        firstname : "Rajesh",
        lastname :"hello"
    }

    const dataover=()=>
    {

        const desdata = true;
        

    }

    const [firstdata, changedata] = useState(objdata);
    
    const datadisplay =()=>
    {
   
     changedata (
        {
            ...objdata,
            firstname :"naresh",


        });
   
   
    }


    return(
       <div>
        <table style = {{border:"1px solid black"}}>
            <tr style = {{border:"1px solid black"}}>
                <td onClick={datadisplay}   style = {{border:"1px solid black"}}>
                    {firstdata.firstname}
                </td>
                
            </tr>
            <tr>
                <td onMouseOver={dataover} style = {{border:"1px solid black"}}>{firstdata.lastname}</td>
            </tr>
        </table>

      

       </div>
    )

}



export default Index;