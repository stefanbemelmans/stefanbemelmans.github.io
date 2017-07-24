import React from 'react';
import './style.css';


export default function Header(props) {
  return(
    <section className="jumbotron jumbotron-fluid"> 
    
      <div class="headerText text-center">
        
        <h1 class="display-2 trans">Welcome To My </h1>
        <a href="./CatFork/IngReCat.html">CatFork!</a>
        <h3>Please Pardon the Page as I Convert it To React</h3><br />
        <h3 style="background-color: aquamarine; color: black;">
          Please CheckOut CatFork! I'm Proud!
        </h3>
            
      </div>
   
      {/* <Bio />
  
        
        
     <div class="carousel">
      </div> 
        
   <Bio />
   */}
      </section>


  )
}