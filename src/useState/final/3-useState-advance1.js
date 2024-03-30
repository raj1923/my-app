import React, {useState}from "react";


const Index =() =>
{

    const objdata=[{
        id :"1",
        firstname : "Rajesh",
        lastname :"hello",
        age:20,
    },

        {
            id:"2",
            firstname : "hello",
        lastname :"hello",
        age:20,
        },
{       id:"3",
        firstname : "raju",
        lastname :"hello",
        age:20,
},
{       id:"4",
        firstname : "babu",
        lastname :"hello",
        age:20,
        
    }];

    

    const [firstdata, changedata] = useState(objdata);
    
        const deletedata =(id) =>
        {
            changedata(
                 firstdata.filter((eachobj)=>
                {
                    return eachobj.id !== id;
                }))

            
           


        }





    return(
  
       <div>

        {firstdata.map((eachobj,index) =>
        {
            const {id,firstname,lastname,age} = eachobj;
            
            return(

                <div>
                    <table>
                    <tr key={index}>
                   <td>{firstname}</td> 
                   <td>{lastname}</td> 
                    <td>{age}</td>
                    <td onClick={()=>deletedata(id)}><button>Delete</button></td>
                    </tr>
                    </table>

                    </div>

            )


        })} 


    

       </div>
    )

}



export default Index;