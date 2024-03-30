import React, { useState } from "react";


const Index =()=>
{



const [inputfirst, changefirst] = useState({

fname:""

})
const [datalist, datachange] = useState([]);
const [editdata, editchange] = useState({
    id:"",
    isedit:"true"
})

const fnamechange =(e,name)=>{

    console.log(e.target.value);
    if (name === 'fname')
    {
        changefirst(
            {
                ...inputfirst,
                fname : e.target.value
            }
        )

    }
}

const submitdata =(e)=>
{
    e.preventDefault();
 let tosolist ={

    fname: inputfirst.fname,
    id: new Date().getSeconds().toString()
 }

 datachange([...datalist,tosolist])

 changefirst(
    {
        fname:"",
        id:""
    }
 )


}

const deletedata = (e)=>
{
console.log(e)

const dataget = datalist.filter((eachobj)=>
{
    return e !== eachobj.id
})

datachange(dataget)
}

const clieckededit =(id)=>
{
    console.log(id)

    editchange({
        id:id,
        isedit:false

    })

    let todolist = datalist.find((eachobj)=>
    {
        return eachobj.id === id;

    })

    changefirst(todolist)
}

const updatedata =(e)=>
{
    e.preventDefault();
    
    const tolist = datalist.map((eachobj)=>
    {
        if(eachobj.id === editdata.id)
        {
            return({
                id:eachobj.id,
                fname:inputfirst.fname
            })

        }
        else{

            return eachobj;
        }

    })
    console.log(tolist)
    datachange(tolist)
    editchange({
        id:"",
        isedit:true

    })




}





return(
  <div>
    <form>
<input type="text"
name="fname"
id="name"
placeholder="Name"
value={inputfirst.fname}
onChange={(e)=>fnamechange(e,"fname")}
></input>
{editdata.isedit ?
(<button onClick={submitdata}>Submit</button>):
(<button onClick={updatedata}>Update</button>)
}
</form>
<div>
{

datalist.map((eachobj)=>
{
return(

<div>
    <p>{eachobj.id}</p>
    <p>{eachobj.fname}</p>
    <button type="submit" onClick={(e)=>clieckededit(eachobj.id)}>Edit</button>
    <button type="submit" onClick={(e)=>deletedata(eachobj.id)}>Delete</button>
    </div>

)



})






}
</div>



  </div>
)




}


export default Index;