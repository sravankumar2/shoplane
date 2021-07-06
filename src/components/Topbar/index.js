import React from 'react';
import "./index.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Topbar=({cart})=>{
    return(
        <div id="top-bar">
            <div className="left-menu">
                <div id="logo">
                    <Link to="/"><span>SHOP</span>lane</Link> 
                </div>
                 <Link to="/">Home</Link>    
     
                  <Link to="/clothing" >Clothing</Link>
                  <Link to="/accessories">Accessories</Link>
            </div>
            <div className="middle-menu">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input id="search-box" type="text" placeholder="Search for Clothing And Accesories"/>
            </div>
            <div className="right-menu">
                    <div id="cart">
                        <p id="cart-count">{cart.length}</p>
                        <Link to="/checkout">
                            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <img src={"./images/corona.jpg"} alt="corona"/>
            </div>
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cart
  });
  
  
  
  export default connect(mapStateToProps, null)(Topbar);