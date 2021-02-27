import React from 'react'
import './Product.css'
import logo from '../../images/logo.png';

export default function Product(props) {
    const {name,price,img,seller,stock} = props.product;
    const asyncImg = img => img ? img : logo;
    return (
        <div className="product">
            <div className="product-image">
               <img src={asyncImg} alt={name}/>
            </div>
            <div className="product-details">
            <h2> {name} </h2>
            <p> By:  {seller}  </p>
            <p> Price:  {price} /- </p>
            <p> Only {stock} left in stock - Order Soon </p>
            <button className="btn btn-orange" onClick={props.onClick}>Add To Cart</button>
            </div>
      </div>
    )
}
