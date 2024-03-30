import React, { useState } from "react";

const Index =()=>
{
    
const [datalist, changelist] = useState([])
const [editdata, editchange] = useState({
    id:"",
    isedit:true
})
const [list, changename] = useState({
 
    fname:"",
    sname:"",
    age:""

})

const changedata =(e,name)=>
{

    if(name === 'fname')
    {
 changename({

    ...list,
    fname :e.target.value,
 }
    
 )
    }

    if(name === 'sname')
    {

        changename({

            ...list,
            sname:e.target.value,
        }
            
         )

    }

    if(name === 'age')
    {
        
        changename(
{
            ...list,
            age :e.target.value,
}
            
         )
        
    

    }


}


const edit =(id)=>
{
 
    editchange(
        {
            ...editdata,
            id :id,
            isedit :false

        });

    const edititem = datalist.find((eachobj)=>
    {
        return id === eachobj.id

    })
    console.log(edititem,"data")

    changename({
        ...list,
        fname:edititem.fname,
        sname:edititem.sname,
        age:edititem.age,
        id:edititem.id


    });


    



}




const submitdata =(e) =>
{
e.preventDefault();

let newtodo = {

    fname: list.fname,
    sname: list.sname,
    age: list.age,
    id: new Date().getMilliseconds().toString()
}



changelist([...datalist ,newtodo ])
changename(
    {
        fname:"",
        sname:"",
        age:"",
        id:""
    }
)






}


const remove =(e)=>
{
    const deldata = datalist.filter((eachob)=>
    {
        return e !== eachob.id;
    });

    changelist(deldata);


}
const updatedata =(e)=>
{
    console.log(datalist,"before")
    e.preventDefault();
   let newtodo = datalist.map((eachobj)=>
   {
    console.log(editdata.id,"getid")
    if(eachobj.id === editdata.id)
    {
        return {
            fname :list.fname,
            sname: list.sname,
            age:list.age,
            id:list.id


        }

    }
    else{
        return eachobj;
    }

   }
   )

   console.log(newtodo,"changedata")
   
   changelist(newtodo);
   changename({
    fname:"",
    sname:'',
    age:'',
    key:''

   })
   editchange(
    {
        ...editdata,
        id :"",
        isedit :true

    });
 
   console.log(editchange.isedit,"dsf")

}


return(

<div>
<form > 
First Name:
<input type="text"
name="fname"
id="fname"
placeholder="First Name"
value={list.fname}
onChange={(e)=> changedata(e, "fname")}

 
>
</input>
Second Name:
<input type="text"
name="sname" 
id="sname"
placeholder="short Name"
value={list.sname}
onChange={(e)=> changedata(e, "sname")}
>
</input>
Age:
<input type="number"
name="age"
id="age"
placeholder="Age"
value={list.age}
onChange={(e)=> changedata(e, "age")}
>
</input>
{editdata.isedit ? 
(<button type="submit" onClick={submitdata}>Submit</button>):
(<button type="submit" onClick={updatedata}>Update</button>)
}


</form>
<div>

{
    datalist.map((eachdata)=>
    {
        return(
<div>       <p key= {eachdata.id}></p>
            <p>{eachdata.fname}</p>
            <p>{eachdata.sname}"</p>
            <p>{eachdata.age}</p>
            <button onClick={(e)=>edit(eachdata.id)}>Edit</button>
            <button onClick ={(e)=>remove(eachdata.id)}>Delete</button>
            </div>
        )
    })
}


</div>


</div>






)};



export default Index;