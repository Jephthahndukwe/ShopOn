import React from 'react'
import '../Stylings/Inventory.css'
import {  FaChevronDown, FaSearch, FaFilter, FaCalendarAlt, FaLocationArrow, FaPlus } from 'react-icons/fa'

const Inventory1 = () => {
  return (
    <div>
         <div className='product-detail'>
                <div className='product-nav'>
                    <h3>Inventory Items</h3>
                    <div className='item'>
                    <h4><FaSearch className='search'/> <input type='text'  placeholder='Search'/></h4>
                        <p><FaFilter className='icon'/> Filter</p>
                        <p><FaCalendarAlt className='icon'/> Filter</p>
                        <p><FaLocationArrow className='icon'/> Share</p>
                        <select className='bulk'>
                          <option>Bulk Action</option>
                          <option>other</option>
                          <option>other</option>
                          <option>other</option>
                        </select>
                   </div>
                </div>

                <div className='Noproduct'>
                  <h3>No Product Added Yet</h3>
                  <p>Add products to your store and start selling <br/> to see your products here.</p>
                  <a href=''><FaPlus className='plus'/> Add Product</a>
                </div>
            </div>
    </div>
  )
}

export default Inventory1