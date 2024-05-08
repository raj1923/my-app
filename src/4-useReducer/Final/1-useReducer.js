import React, { useEffect, useReducer, useState } from "react";


const reducer =(state, action)=>
    {
        console.log(state,"statedata")
        console.log(action,"updatedtata")
            if(action.type === "Dataupload")
                {
                    return {
                        ...state,
                        userdata: action.payload

                    }
                }

            if(action.type === "DELETE")
                {
                    const deldata = state.userdata.filter((eachdata)=>
                    {
                       return action.playload !== eachdata.id
                    })
                    return{
                        ...state,
                        userdata :deldata
                    }
                }
            if(action.type === "EDITDATA")
                {
                    
                    return{
                        ...state,
                        isEdit: action.playload

                    }
                }

            if(action.type === "UPDATEDATA")
                {

                    const userupdate = state.userdata.map((eachdata)=>
                    {   

                        if(action.playload.id === eachdata.id)
                            
                            {
                                return{
                                    id: action.playload.id,
                                    name: action.playload.name,
                                    email: action.playload.email,
                                    address: {city:  action.playload.adddata}
                                }
                            }
                        else{

                            return eachdata
                        }

                        



                    });
                    return{

                        ...state,
                        userdata : userupdate
                    }

                }

            
      

        return state;
    }


const Index =()=>
    {


        const startingdata = {

            userdata :[],
            iserror : {status: false, mgs: ""},
            isEdit : {status: false, id : "", name: "", email: ""}
        }

        
        const [state, dispatch] = useReducer(reducer, startingdata) 

        const updateddata =(id, name, adddata,email)=>
            {
                console.log(adddata, "address")
                dispatch(
                    {
                        type:"UPDATEDATA",
                        playload: {id, name, adddata, email }
                    }
                )

                dispatch({
                    type:"EDITDATA",
                    playload: { status: false, id:"" ,name: "", email: "", address: "" }})


            }



        useEffect(()=>
        {
            datacollection ("https://jsonplaceholder.typicode.com/users")
        }, [ ])

        const datacollection = async(urldata)=>
            {
                dispatch({type:"ERROR", playload:{status: false, mgs: ""} })
                try{
                const responce = await fetch(urldata);
                const data = await responce.json();
                dispatch({type:"Dataupload", payload:data});
                dispatch({type:"ERROR", playload:{status: false, mgs: ""} })
                
                }
                catch(error){
                    dispatch({type:"ERROR", playload: {status: true, mgs: error}})

                }

            }

    
        console.log(state,"afterdata")

        return <div>
            <h1>HELLO</h1>
           
                        {state.isEdit?.status && <Editdata id={state.isEdit.id}name= {state.isEdit.name} email={state.isEdit.email} address = {state.isEdit.address} updateddata = {updateddata} />}
                        
                       <table style={{border:"4px", width:"50%", height:"30px"}}>
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                        {
                            state.userdata.map((eachdata, index)=>
                            {
                                return <tr style={{textAlign:"center"}}  key={index}>
                                    <td>{index}</td>
                                    <td>{eachdata.name}</td>
                                    <td>{eachdata.email}</td>
                                    <td>{eachdata.address.city}</td>
                                    <td><button onClick={()=> dispatch({type:"DELETE", playload: eachdata.id})}>Delete</button></td>
                                    <td><button onClick={() => dispatch({
                                        type:"EDITDATA",
                                        playload: { status: true, id:eachdata.id ,name: eachdata.name, email: eachdata.email, address: eachdata.address.city }})}>Edit</button></td>
                                </tr>
                            })
                        }
                        
                       </table>

           
        </div>

    }

    const Editdata =({id, name, email, address,updateddata})=>
        {
            console.log(id,"namedata");
            const [namedata, setname] = useState(name || " ")
            const [emaildata, setemail] = useState(email || " ")
            const [adddata, setadd] = useState(address || "")
            return<div>
                <input type="text" name="fname" id="fname" value={namedata} onChange={(e)=> setname(e.target.value)}></input>
                <input type="text" name="gmail" id="gmail" value={emaildata} onChange={(e)=> setemail(e.target.value)}></input>
                <input type="text" name="gmail" id="gmail" value={adddata} onChange={(e)=> setadd(e.target.value)}></input>
                <button onClick={()=>updateddata(id, namedata,adddata, emaildata )}> Update</button>
            </div>
        }


    export default Index;