import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import ProductList from './ProductList'
import LeftSideBar from './LeftSideBar'

export default function HomePage() {
  const [filters, setFilters] = useState({
        priceRange: { min: 0, max: 10000 },
        selectedBrands: [],
        excludeOutOfStock: false,
    });

  const [products, setProducts] = useState([]);

  const handleFilterChange = (updatedFilters) => {
      setFilters((prev) => ({ ...prev, ...updatedFilters }));
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [filters]);

  // Fetch products whenever filters change
  //   useEffect(() => {
  //       const fetchProducts = async () => {
  //           const { priceRange, selectedBrands, excludeOutOfStock } = filters;

  //           const response = await fetch('/api/products', {
  //               method: 'POST',
  //               headers: { 'Content-Type': 'application/json' },
  //               body: JSON.stringify({ priceRange, selectedBrands, excludeOutOfStock }),
  //           });
  //           const data = await response.json();
  //           setProducts(data); 
  //       };

  //       fetchProducts();
  //   }, [filters]); 

  return (
    <>
        <NavBar />
        <div className='d-flex vh-100'>
            <div style={{"width":"350px"}}>
              <LeftSideBar filters={filters} onFilterChange={handleFilterChange}/>
            </div>
            <div className='main-content'>
                <ProductList products={products} />
            </div>
        </div>
    </>
  )
}
