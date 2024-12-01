import React from 'react'
import NavBar from './NavBar'
import ProductList from './ProductList'
import LeftSideBar from './LeftSideBar'

export default function HomePage() {
  return (
    <>
        <NavBar />
        <div className='d-flex vh-100'>
            <div style={{"width":"350px"}}>
              <LeftSideBar />
            </div>
            <div className='main-content'>
                <ProductList />
            </div>
        </div>
    </>
  )
}
