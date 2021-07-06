import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
const card =({id,preview,brand,price,name})=>{
    
        return ( 
        <div key={Math.random()} className="product-card">                    
             <Link to={`/product/${id}`} id={id} >
                 <img src={preview} alt={name} className="product-image"/>
                    <div className="product-meta">
                        <h3>{name}</h3>
                        <h5>{brand}</h5>
                        <p>RS:{price}</p>
                     </div>
             </Link>                   
        </div>
    
        );
}
export default card;
