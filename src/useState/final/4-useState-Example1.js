import React,{ useState } from "react";

const Example1 =() =>
{
    const [data, changedata] = useState(true);
    const [hoverd, hoverchnage] = useState(false);

const displaydata =()=>
{
    
    changedata(!data)
  
}

const hoverdata =()=>
{
    hoverchnage(!hoverd)

}




return(
<div>
<button onClick={()=>displaydata()}>{data?"hide":"show"}</button>
{data &&
<p>The approach involve­s using React’s state hooks to 
    manage button disable­d states. Two functions are create­d for toggling 
    the disabled state, accompanie­d by alerts to provide user massage. 
    The buttons’ appearance­ is determined by conditional internal styling. 
    The internal CSS define­s a centered layout with a promine­nt
     green heading and distinct style­s for disabled 
     (gray, no cursor) and enabled (re­d, pointer cursor) button states.</p>
}

<button onMouseOver={hoverdata}> hoverme</button>
{/* {hoverd &&
<p>The approach involve­s using React’s state hooks to 
    manage button disable­d states. Two functions are create­d for toggling 
    the disabled state, accompanie­d by alerts to provide user massage. 
    The buttons’ appearance­ is determined by conditional internal styling. 
    The internal CSS define­s a centered layout with a promine­nt
     green heading and distinct style­s for disabled 
     (gray, no cursor) and enabled (re­d, pointer cursor) button states.

</p>
} */}


{hoverd ?(
<p>The approach involve­s using React’s state hooks to 
    manage button disable­d states. Two functions are create­d for toggling 
    the disabled state, accompanie­d by alerts to provide user massage. 
    The buttons’ appearance­ is determined by conditional internal styling. 
    The internal CSS define­s a centered layout with a promine­nt
     green heading and distinct style­s for disabled 
     (gray, no cursor) and enabled (re­d, pointer cursor) button states.

</p>):
<p>GOOD DATA</p>
} 






</div>





)};

export default Example1;



