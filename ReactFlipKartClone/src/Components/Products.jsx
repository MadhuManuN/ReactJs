import React from 'react'
import { Link } from 'react-router-dom'



function Products({products,title}) {
    
    return (
        <div >
            <div className='title'>
            <h1>{title}</h1>
            </div>
            <section className='parent'>
                {
                    products?.map((products, index) => {
                        return (
                            <div key={index} className='child'>
                                <Link to={`/ProductDetails${products.id}`}>
                                <img className='img'src={products.productPic} />
                                <h3>{products.brand}</h3>
                                <p>{products.description}</p>
                                <span>{products.discountPrice}</span> <small>{products.mrp}</small>
                                </Link>
                            </div>
                        )
                    })
                }
            </section>

        </div>
    )
}

export default Products