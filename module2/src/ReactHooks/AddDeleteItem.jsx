import React, { useState } from 'react'

function AddDeleteItem() {
    let[items,setItems]=useState([])
    let[item,setItem]=useState("");
    let[cart,setCart]=useState(0);
    let updateItem=({target:{value}})=>{
        setItem(value);
    }
    let updateItems=()=>{
        setItems([...items,item])
        setCart(cart+1);
        setItem("")
    }

    let deltedItem=(id)=>{
        items.splice(id,1)
        setCart(cart-1);
        setItems([...items])
    }
  return (
    <div>
        <h1>Cart : {cart}</h1>
        <label htmlFor="">Item Name: </label>
        <input type="text" placeholder='Enter The Item' value={item} onChange={updateItem}/>
        <button onClick={updateItems}>Add</button>
        {
            items.map((item,index)=>{
                return(
                <li key={index}>{item}
                <button onClick={()=>{deltedItem(index)}}>Delete</button>

                </li>
            )})
        }
    </div>
  )
}

export default AddDeleteItem