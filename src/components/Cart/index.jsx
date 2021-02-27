import React,{useState} from 'react';
import Product from '../Product/Product';
// import './Cart.css';
import fakeData from '../../fakeData/index';

export default function Cart() {
    const [products,setState ] = useState(fakeData.slice(0,10));
    const [cart,setCart] = useState([]);

   
    const addToCart = product => {
        console.log(product)
        setCart([...cart,product]);
    }
    const total = cart.reduce((total,product) => total + product.price ,0);
    let shipping = 0;
    if(total >35){
        shipping = 4.99;
    }else if(total > 100){
        shipping = 11.99;
    }
    const tax = total/10 + shipping;
    const grandTotal = tax + shipping + total;
    return (
        <div className="cart-container">
            <h3>Cart ( {cart.length} ) </h3>
            <h1> Order Summary </h1>
            {/* { cart.map(ct => <li> {ct.name } </li>) } */}
            <p> Item Ordered  : {cart.length} </p>
            <p> Price : {total} </p>
            {/* <p> <small>Shipping cost : {shipping } </small> </p> */}
            <p> Tax + VAT : {tax} </p>
            <p> Total Price : {grandTotal} </p>
           <button className="btn btn-orange"> Checkout </button>
        </div>
    )
}
