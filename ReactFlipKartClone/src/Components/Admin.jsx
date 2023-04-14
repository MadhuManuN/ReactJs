import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from './useFetch'

function Admin() {

    let{data:products,pending,error}=useFetch("http://localhost:4000/products");

    let handleDelete=(id)=>{
        fetch(`http://localhost:4000/products/${id}`,{method:"DELETE"})
        .then(()=>{
            alert("Item has been Deleted");
            window.location.reload();
        })
    }
  return (
    <div>
    <h1> Admin Page</h1>
    <hr />
    
    <Link to="/addnewproduct"><button style={{fontSize:"20px" ,marginLeft:"250px"}}>Add New Product</button></Link>
    
    {products && <table border="4px">
        <thead>
            <th>SL NO</th>
            <th>Product</th>
            <th>Product Brand</th>
            <th>Product Price</th>
            <th colSpan={2}>Action</th>
        </thead>
        <tbody>
            {
                products?.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td><img src={item.productPic} width="60px" height={"60px"}/></td>
                            <td>{item.brand}</td>
                            <td>{item.discountPrice}</td>
                            <td><Link to={`/updateproduct${item.id}`}><button>Edit</button></Link></td>
                            <td><button onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
}
    </div>
  )
}

export default Admin