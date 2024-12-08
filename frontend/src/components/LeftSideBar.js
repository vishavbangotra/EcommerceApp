import React, { useEffect, useState } from "react";


export default function LeftSideBar({ filters, onFilterChange }) {
  const [productBrands, setProductBrands] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/productBrands")
      .then((response) => response.json())
      .then((data) => {
        setProductBrands(data);
      });
  }, []);
  return (
    <div class="bg-dark text-light p-3 h-100">
      <div id="sidebar-menu">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <h5>Price range</h5>
            <div className="d-flex align-items-center gap-2">
              <input className="form-control bg-light" type="number"></input>
              <span>to</span>
              <input className="form-control bg-light" type="number"></input>
            </div>
          </div>
          <div className="d-flex flex-column" style={{ maxHeight: '50vh', overflow: 'auto' }}>
            <h5>Brands</h5>
            {productBrands.map((brand, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={brand}
                  id={`brand${index}`}
                />
                <label className="form-check-label" htmlFor={`brand${index}`}>
                  {brand}
                </label>
              </div>
            ))}
            <div>
              <span>more brands</span>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="out_of_stock_filter"
              />
              <label className="form-check-label" htmlFor="out_of_stock_filter">
                Exclude Out of Stock
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
