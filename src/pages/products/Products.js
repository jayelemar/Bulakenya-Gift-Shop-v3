import React from 'react'
import ProductList from './ProductList'

const Products = () => {
  return (
    <section id='products'>
      <div style={{ height: '60px' }} className='container bg-slate-800'></div>
      <div className="container bg-slate-800">
        <h1 className='text-white'>product.js</h1>
        <ProductList/>
      </div>
    </section>
  )
}

export default Products
