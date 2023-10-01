import React from 'react'
import Product from './Product'
import ProductForm from './ProductForm'

const ProductList = () => {
  return (
    <>
        <h2>Product Manager</h2>
        <ProductForm />
        <div>
            <p>
                <b>Total Products:</b> 0
            </p>
            <p>
                <b>Completed Products:</b> 0
            </p>
        </div>
        <hr />
        <Product />
    </>
  )
}

export default ProductList
