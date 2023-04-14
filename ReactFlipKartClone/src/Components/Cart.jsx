import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';
import Products from './Products';

function Cart() {
    let [cart,setCart]=useState([]);
    let[totalPrice,setTotalPrice]=useState(null);

    useEffect(()=>{
        let cartArray=localStorage.getItem("cart");
        cartArray=JSON.parse(cartArray);
        setCart(cartArray);
        let t=cartArray.reduce((accumulator,prod)=>
        {
            return Number(prod.discountPrice)+accumulator
        },0)
            setTotalPrice("total Amount is "+t+" Rupees")
    },[])

   let  handleRemove=(id)=>{
    let cartArray=localStorage.getItem("cart");
        cartArray=JSON.parse(cartArray);
    }
  return (
    <div>
        <Navbar/>
        <h1>Cart Page</h1>
        {totalPrice && <h1>{totalPrice}</h1>}
        <div className='cart-items'>
        {
            cart.map((item)=>{
                return(
                    <div className='cart-item'>
                        <img src={item.productPic} />
                        <div>
                            <h1>{item.brand}</h1>
                            <h3>{item.description}</h3>
                            <input type="text" value={item.discountPrice} readOnly />
                            <button onClick={()=>{handleRemove(item.id)}}>Remove product from cart</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Cart