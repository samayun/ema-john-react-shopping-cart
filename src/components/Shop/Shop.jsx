import React,{useState} from 'react';
import Product from '../Product/Product';
import './Shop.css';
import fakeData from '../../fakeData/index';

export default function Shop() {
    const [products,setState ] = useState(fakeData.slice(0,10));
    const [cart,setCart] = useState([]);
   
    const addToCart = product => {
        console.log(product)
        setCart([...cart,product]);
    }
    const formatNumber = num => Number(num.toFixed(2));
    const total = cart.reduce((total,product) => total + product.price ,0);
    let shipping = 0;
    if(total >35){
        shipping = 4.99;
    }else if(total > 100){
        shipping = 11.99;
    }
    const tax = (total/10 + shipping);
    const grandTotal = (tax + shipping + total);
    return (
    <section className="shop-container">
        <div className="product-container">
            {
                products.map(product => <Product key={product.key} product={product} onClick={() => addToCart(product)}/>)
            }
        </div>
        <div className="cart-container">
            <h3>Cart ( {cart.length} ) </h3>
            <h1> Order Summary </h1>
            {/* { cart.map(ct => <li> {ct.name } </li>) } */}
            <p> Item Ordered  : {cart.length} </p>
            <p> Price : {formatNumber(total)} </p>
            {/* <p> <small>Shipping cost : {shipping } </small> </p> */}
            <p> Tax + VAT : {formatNumber(tax)} </p>
            <p> Total Price : {formatNumber(grandTotal)} </p>
           <button className="btn btn-orange">Review Cart</button>
        </div>
    </section>
    )
}
