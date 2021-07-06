import React from 'react';
import "./index.css";
import { connect } from 'react-redux';

const PlaceOrder = ({ cart }) => {
    return (<div id="container">
    <div id="green-symbol">
        <i className="fas fa-check"></i>
    </div>
    <h1 className="text-heading">Order Placed Successfully!!</h1>
    <p className="text">We have sent you an email with the order details</p>
</div>);
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(PlaceOrder);