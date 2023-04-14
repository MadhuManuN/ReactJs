import React from 'react'
import { useParams } from 'react-router-dom';
import Products from './Products';
import useFetch from './useFetch';
import load from './loading.jpg'
import Navbar from './Navbar';

function ProductDetails() {

    let { id } = useParams();

    let { data: product, pending, error } = useFetch(`http://localhost:4000/products/${id}`);

    let handleCart=()=>{
        let cartArray=localStorage.getItem("cart");
        cartArray=JSON.parse(cartArray);

        let present=cartArray.some((item)=>{
            return item.id==product.id
        })
        if(present===false)
        {
            cartArray.push(product);
            cartArray=JSON.stringify(cartArray);
            localStorage.setItem("cart", cartArray)
            alert("Item has been added to the cart")
        }
        else{
            alert("Item already been added")
        }

    }
    return (
        <div>
            <Navbar/>
            <h1>Product Details Page</h1>
            {error && <h2>{error}</h2>}
            {pending && <img src={load} className="loader" alt="" />}
            {product && <div className='child'>
                <img className='img'src={product.productPic} />
                <h3>{product.brand}</h3>
                <p>{product.description}</p>
                <span>{product.discountPrice}</span> <small>{product.mrp}</small>
                <button id='cart-btn' onClick={handleCart}>Add to cart</button>
            </div>}
        </div>
    )
}

export default ProductDetails;