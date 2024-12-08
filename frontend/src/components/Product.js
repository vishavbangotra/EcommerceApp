import React from 'react'
import sampleProductImage from './assets/sample-product.jpg';

export default function Product(props) {
  return (
    <div className="card">
      {/* <div className='d-flex flex-column align-items-start'> */}
      <img
        className="card-img-top"
        width={"100%"}
        height={"100%"}
        src={props.product.imageUrl}
        alt="Product Img"
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-sub-title">{props.product.category}</p>
        <span className="card-text">{props.product.description}</span>
      </div>
      {/* </div> */}
    </div>
  );
}
