import React from 'react';
import "./index.css";
import Icons from "../AnimatedFeatur/icons/index";
const AnimatedIcons=()=>{
   
    return(        
        <div className="features">      
     
              <div className="icon-container">
                  <div className="img-wrapper">
                    <img src={Icons.icon1} alt=""/>
                  </div>
                 <h4>Free Delivery</h4>
              </div>
              <div className="icon-container">
                  <div className="img-wrapper">
                    <img src={Icons.icon2} alt=""/>
                  </div>
                 <h4>Money Back Gurantee</h4>
              </div>
              <div className="icon-container">
                  <div className="img-wrapper">
                    <img src={Icons.icon3} alt=""/>
                  </div>
                 <h4>Always Support</h4>
              </div>
              <div className="icon-container">
                  <div className="img-wrapper">
                    <img src={Icons.icon4} alt=""/>
                  </div>
                 <h4>Secure Payment</h4>
              </div>
         
        </div>
    )
}
export default AnimatedIcons;