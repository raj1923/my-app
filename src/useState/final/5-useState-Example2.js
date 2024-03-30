import React, { useState } from "react";





const Index = ()=>
{


    

const [fname, fchagename ]=useState("");
const [email, echagename ]=useState("");
const [password, pchagename ]=useState("");



// const changefirtname =(e)=>
// {

//     console.log(e.target.value)
//     fchagename(e.target.value);

// }
// const changeemail =(e)=>
// {

//     echagename(e.target.value);

// }
// const changepassword =(e)=>
// {

//     pchagename(e.target.value);

// };

// const changehandle =(e, name)=>
// {

//     console.log(name);
// if (name === 'fname')
// {
//     fchagename(e.target.value)
// }
// if (name === 'email')
// {
//     echagename(e.target.value)
// }
// if (name === 'password')
// {
//     pchagename(e.target.value)
// }


// }



const handlesubmit =(e)=>
{

e.preventDefault();
let userobj ={

name:fname,
email:email,
pas:password,


}

console.log(userobj)





};



return (
<div>
<form onSubmit={handlesubmit}>
<div>
<input 
type ="text"
name="name"
id="name"
value={fname}
placeholder="NAME"
onChange={(e)=>fchagename(e.target.value)}> 
</input>
<input 
type ="email" 
name="email"
id="email"
value={email}
onChange={(e)=>echagename(e.target.value)}
placeholder="EMAIL">
</input>

<input type ="password" 
value={password}
onChange={(e)=>pchagename(e.target.value)}
name="email"
id="mail"
placeholder="PASSWORD"></input>
<button type ="submit" >Submit</button>
</div>
</form>


</div>

)


}



export default Index;