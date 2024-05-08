import React, { useState } from "react";

const patients = [{
    type:"ars", id: 1
  },
{type:"bbs", id:2},
{
  type:"ARFj", id:3
}]



const Index =()=>
{
    const [getdata, setdata] = useState(patients)
    const [changedata, setchange] = useState("")

 console.log(getdata,"data")
 console.log(changedata,"changedata")

  return <div>
    <select onChange={(e)=>setchange(e.target.value)}>
      {
        getdata.map((eachdata)=>
      <option key={eachdata.id}>{eachdata.type}</option>)
      }
    </select>
  </div>
}

export default Index;