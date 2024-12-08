import React from 'react'
import sampleProductImage from './assets/sample-product.jpg';

export default function Product(props) {
  return (
    <div className='card'>
            {/* <div className='d-flex flex-column align-items-start'> */}
            <img className='card-img-top' width={"100%"} height={"100%"}  src={sampleProductImage} alt="Product Img" />
            <div className='card-body'>
                <h5 className='card-title'>Product Name</h5>
                <p className='card-sub-title'>Category</p>
                <span className='card-text'>500</span>
            </div>
            {/* </div> */}
    </div>
  )
}
