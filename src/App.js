import React from "react";
import Navbar from "./Route-Componets/Navbar";
import Home from "./Route-Componets/Home";
import About from "./Route-Componets/About";
import Contact from "./Route-Componets/Contact";
import { Routes, Route } from "react-router-dom";
import Submit from "./Route-Componets/Submit";
import Projects from "./Route-Componets/Projects";
import Feturepro from "./Route-Componets/Feturepro";
import Oldpro from "./Route-Componets/Oldpro";
import Users from "./Route-Componets/Users";
import Userdetais from "./Route-Componets/UsersDetails";
const App =()=>
{

return (

  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Sucess" element={<Submit/>}/>
      <Route path="/Projects" element={<Projects/>}>
        <Route path="Ferurepro" element={<Feturepro/>}/>
        <Route path="Oldpro" element= {<Oldpro/>}/>
      </Route>
      <Route path="/Users" element= {<Users/>}/>
      <Route path="/Users/:userid" element= {<Userdetais/>}/>
    </Routes>
  </div>

)}


export default App;
