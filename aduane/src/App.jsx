import React from "react";
import "./css/style.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import NavB from "./components/NavB/NavB"
import NavbarH from "./components/NavbarH/NavbarH"
import Gallery from "./pages/Gallery/Gallery"







const app = () =>{


  return(

    <div className="app">
      <link rel="favicon icon" href="favicon.ico" />


    <Navbar />
    
    <NavB />

    <NavbarH />
  
   <Gallery />


 <Router>

  <Routes>
  
<Route path="/NavB" element={<NavB />}/>
  </Routes>
 </Router>

 
 
    </div>
   





  )
}

export default app