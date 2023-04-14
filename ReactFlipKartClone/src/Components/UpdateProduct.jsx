import React, { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

function UpdateProduct() {
    
    let {id}=useParams();

    let reDirectPage=useHistory();

    let{data:product,pending,error}=useFetch(`http://localhost:4000/products/${id}`)

    let pic=useRef();
    let brand=useRef();
    let desc=useRef();
    let discount=useRef();
    let mrp=useRef();
    let color=useRef();
    let fabric=useRef();
    let type=useRef();
    let rate=useRef();
  
      let handleClick=(e)=>{
        e.preventDefault()
  
        let updateProduct={
          productPic: pic.current.value,
          brand:     brand.current.value,
          description:     desc.current.value,
          discountPrice:     discount.current.value,
          mrp:     mrp.current.value,
          color:     color.current.value,
          fabric:     fabric.current.value,
          productType:     type.current.value,
          usage:     "",
          rating:     rate.current.value,
          size:     []
        }
  
        let genderOptions=document.getElementsByName("gender");
        genderOptions.forEach((inp)=>{
          if(inp.checked==true)
          {
            updateProduct.usage=inp.value;
          }
        })
  
        let sizeAvailable=[]
        let sizeOptions=document.getElementsByName("size");
        sizeOptions.forEach((inp)=>{
          if(inp.checked===true)
          {
            sizeAvailable.push(inp.value);
          }
        })
        updateProduct.size=sizeAvailable;
        
        fetch(`http://localhost:4000/products/${id}`,{
                                                     method:"PUT",
                                                     headers:{"Content-Type" : "application/json" , "Accept-Type" : "application/json"},
                                                     body:JSON.stringify(updateProduct)  
        })
        .then(()=>{
            alert("Product  has been Updated ")
            reDirectPage.push("/admin")
        })
      }

    return (
      <div className='add-product'>
        <h1>Add the product {id}</h1>
        <hr />
  
        <form onSubmit={handleClick}>
          <label>Product Pic</label>        <input type="url"  ref={pic}/>
          <label>Brand</label>          <input type="text"  ref={brand}/>
          <label>Description</label>    <textarea  cols="30" rows="10"  ref={desc}></textarea>
          <label>Discount Price</label> <input type="number"  ref={discount}/>
          <label>mrp</label>            <input type="number"  ref={mrp}/>
          <label>color</label>          <input type="text"  ref={color}/>
          <label>Fabric</label>         <input type="text"  ref={fabric}/>
          <label>ProductType</label>    <input type="text"  ref={type}/>
          <label>Usage</label>          <div>
                                          <input type="radio" name='gender' /><label> Male</label>
                                          <input type="radio" name='gender'  /><label> FeMale</label>
                                          <input type="radio"  name='gender' /><label> UniSex</label>
                                        </div>
          <label>rating</label>         <input type="number"  ref={rate} step="0.1" min={1} max="5" />
          <label>Size</label>            <div>
                                          <input type="checkbox" name='size'/><label >S</label>
                                          <input type="checkbox" name='size'/><label >M</label>
                                          <input type="checkbox" name='size'/><label >L</label>
                                          <input type="checkbox" name='size'/><label >XL</label>
                                          </div>
                                          <input type="submit" />
         </form>
      </div>
    )
}

export default UpdateProduct