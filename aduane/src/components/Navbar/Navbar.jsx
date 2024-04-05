import "./Navbar.css"
import{Link} from "react-router-dom"





const Nav = () => {


    return(

        <div className="navbar">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />  
<nav>


<ul>
        <div className="loca">
        <i className="fa-solid fa-location-dot"></i>
        <li><a href="#">Eyerain</a></li>
        </div>
        
        <div className="round">
     <i className="fa-solid fa-circle"></i>
        <li><a href="#">Way Home</a></li>
        </div>
      
        <li><a  href="/NavB">four</a></li>
        <li><a href="#">overview access</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">KOntactTv</a></li>
    </ul>
 

</nav>

<nav className="nav2">

    <div className="image">
  <a href="#"><i className="fa-solid fa-phone"></i></a>
  <a href="#"><i className="fa-solid fa-comments"></i></a> 
 <a href="#"><i className="fa-solid fa-paper-plane"></i>
</a>
    </div>
   
<div className="hp">
 <p> <span className="number">+7733833(2344)236 </span><br />
  Lorem ipsum dolor sit amet.
 </p>
</div>
   
</nav>


    

        </div>
    )
}

export default Nav