import React from 'react'

export default function LeftSideBar() {
  return (
      <div class="bg-dark text-light p-3 h-100">
          <div id="sidebar-menu">
              <div className='d-flex flex-column gap-3'>
                <div className='d-flex flex-column'>
                    <h5>Price range</h5>
                    <div className='d-flex align-items-center gap-2'>
                        <input className='form-control bg-light' type='number'></input>
                        <span>to</span>
                        <input className='form-control bg-light' type='number'></input>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                      <h5>Brands</h5>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='brand1' />
                        <label className='form-check-label' htmlFor='brand1'>
                        Brand 1
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='brand2' />
                        <label className='form-check-label' htmlFor='brand2'>
                        Brand 2
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='brand3' />
                        <label className='form-check-label' htmlFor='brand3'>
                        Brand 3
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='brand4' />
                        <label className='form-check-label' htmlFor='brand4'>
                        Brand 4
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='brand5' />
                        <label className='form-check-label' htmlFor='brand5'>
                        Brand 5
                        </label>
                    </div>
                    <div>
                        <span>more brands</span>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='out_of_stock_filter' />
                        <label className='form-check-label' htmlFor='out_of_stock_filter'>
                        Exclude Out of Stock
                        </label>
                    </div>    
                </div>

              </div>
          </div>
      </div>
  )
}
