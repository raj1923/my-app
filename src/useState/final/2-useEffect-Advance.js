import React, { useEffect, useState } from "react";

const URL ="https://thecocktaildb.com/api/json/v1/1/search.php?s=";



const Index =()=>
{

    const [getdata, setdata] = useState([]);

    const [searchdata, setsearch] =useState("");
    const [iserror, seterror] =useState(
        {
            status:false,
            mgs:""
        }
    )
   

    


    const drinksdata = async(apiurl)=>
{
try{
    const responce = await fetch(apiurl);
    const {drinks} = await responce.json();
    console.log(drinks)
    setdata(drinks);
    if(!drinks)
    {
        throw new Error("No Data Found");
    }
    seterror({
        status:false,
        msg: ""
    })

}

catch(e)
{
    seterror({
        status:true,
        msg: e.mgs  ||"Some thing Wrong"
    })

}
    
    


}


const newUrl = `${URL}${searchdata}`

useEffect(()=>{
    drinksdata(newUrl);
},[searchdata]);


console.log(getdata,"datadrinks")


    return <div>
    <form>
    <input type="text" 
    name= "search"
    id="name"
    placeholder="Search"
    value={searchdata}
    onChange={(e)=>setsearch(e.target.value)}
    
    ></input>
    </form>

  
        <div>
            {iserror?.status && 
            <h1>NO DATA</h1>
            }
            {!iserror?.status &&(
                <div>
                    {
            getdata.map((eachobj)=>
            {
                return <li key={eachobj.idDrink}> 
                    <img src={eachobj.strDrinkThumb} alt={eachobj.strDrink}></img>
                    <h3>{eachobj.strDrink}</h3>
                </li>
    
    
            })
            }
                    </div>


            )






            }
        </div>



     
       
 
    
    

    





        </div>
    
}


export default Index;