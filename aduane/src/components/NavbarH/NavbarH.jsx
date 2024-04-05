import "./NavbarH.css"
import image from "../../image/images.png"
import cent from "../../image/cent.png"
import center from "../../image/center.png"








const NavbarH = () =>{



    return(
        <div className="NavbarH">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

    <div className="first-nav">

        <nav>
            <ul>
                <div className="list-list">
                <div className="list">
              
                <li><a href="#">Modification</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>
                <hr />
                </div>


                <div className="list-list">
                <div className="list">
        
                <li><a href="#">Category</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>
                

                <div className="list-list">
                <div className="list">
              
                <li><a href="#">Tsquare</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>

                <div className="list-list">
                <div className="list">
               
                <li><a href="#">Curnsevvs</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>

           
                <div className="list-list">
                <div className="list">
               
                <li><a href="#">Javascript</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>

                <div className="list-list">
                <div className="list">
             
                <li><a href="#">Acyyisjxy</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>

                <div className="list-list">
                <div className="list">
             
                <li><a href="#">Cases</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>

                <div className="list-list">
                <div className="list">
                
                <li><a href="#">Axsnxur*&</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>

                <div className="list-list">
                <div className="list">
              
                <li><a href="#">Kyboa</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr/>
                </div>

                <div className="list-list">
                <div className="list">
                
                <li><a href="#">passobe</a></li>
                </div>
                 
                <i className="fa-solid fa-greater-than"></i>

                <hr />
                </div>
              
               
            </ul>
        </nav>
    </div>

    <div className="img-desc-main">


    <div className="img-desc1">


<img src={image} alt="banner1" className="trial" width="620" height="390"/>

<div className="diamond-main">

<div className="diamond-info">

<i className="fa-solid fa-diamond"></i>
<div className="diamond-desc">
<h2 >Sonee 10 000 rosapoe</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
</div>

</div>


<div className="diamond-info">
<i className="fa-solid fa-ruble-sign"></i>

<div className="diamond-desc">
<h2>Sonee 10 000 rosapoe</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
</div>

</div>
</div>



</div>


<div className="img-desc2">

<div className="img-redBlack">
<img src={cent} alt="red" className="img-red" width="400" />
<img src={center} alt="black" className="img-black"  width="400" />
</div>



<div className="diamond-info">
<i className="fa-solid fa-truck"></i>

<div className="diamond-desc">
<h2>Sonee 10 000 rosapoe</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
</div>

</div>

</div>
    </div>

    


        </div>
    )
}


export default NavbarH