import React, { useState } from 'react'
import Product from './Product'

export default function ProductList() {

  return (
    <div>
        <div className='row'>
            <div className='col-lg-3'>
                <Product></Product>
            </div>
        </div>
    </div>
  )
}
