import React, { useEffect, useState } from 'react'
import Product from './Product'

export default function ProductList({ products }) {
  // useEffect(() => {
    
  // }, [])

  return (
    <div className='container pt-2'>
        <div className='row'>
              {products.map((product) => {
                  return (
                    <div className="col-lg-3">
                      <Product product={product} />
                    </div>
                  );
              })}
        </div>
    </div>
  )
}
