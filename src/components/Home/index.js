import React from 'react';
import "./index.css";
import {ApiData} from "../../Utils/commonData";
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../Card";
import AnimatedIcons from '../AnimatedFeatur';
import DemoCarousel from '../Slider';
import { connect } from "react-redux";
import { getProductList } from "../../actions/index"
const Home = ({productList}) => {
    // const [productList,setProductList]=useState([])
    // useEffect(()=>{
    //     axios.get(ApiData)
    //     .then(res=>{
    //         setProductList(res.data);
    //     })
       
    // },[])
    return(
        <>
        <DemoCarousel/>
        <AnimatedIcons/>
            <div>
            <h2 className="clothing-item">Clothing for Men and Women</h2>
                <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center", padding: "10px 8%" ,boxSizing:"border-box"}}>
                    {productList.map(product => (product.isAccessory) || <Card {...product} key={Math.random()} />)}
                </div>
            </div>
            <h2 className="clothing-item">Accessories for Men and Women</h2>
                <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center", padding: "10px 8%" }}>
                    {productList.map(product => !(product.isAccessory) || <Card {...product} key={Math.random()} />)}
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    productList: state.productList,
    cart: state.cart

})

const mapDispatchToProps = (dispatch) => ({
    updateProductList: (productList) => dispatch(getProductList(productList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)