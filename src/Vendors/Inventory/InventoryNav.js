import React, { useState } from 'react'
import '../Stylings/Inventory.css'
import { FaChevronDown,
        FaBell,
        FaHome,
        FaPlus,
        FaFolderMinus,
        FaSearch,
        FaFilter,
        FaCalendarAlt,
        FaLocationArrow } from 'react-icons/fa'
import icon from '../Inventory/img/icon.png'

const InventoryNav = () => {
const [vendor, setVendor] = useState("")
const [product, setProduct] = useState("350")
const [stock, setStock] = useState("₦922,901,000.00")


  return (
    <div className='body'>
        <div className='header'>
          <nav>
                <h1>Inventory</h1>
                    <p>TEE Gadgets 
                    <FaChevronDown className='arrow'/>
                    </p>
                    <FaBell className='bell'/>
            </nav>
                <div className='head'>
                    <p><FaHome className='home'/></p> 
                    <p>/</p>
                    <p>Inventory</p>
                </div>
        <div className='inventory'>
            <div className='inventory-nav'>
            <h3>Inventory Summary</h3>
            <p><FaPlus className='plus'/> Add a New Product</p>
            </div>
            <div className='invent'>
                <div className='invent-box'>
                    <FaFolderMinus  className='folder'/>
                    <div className='invent-box2'>
                        <div className='product'>
                            <p>All Product</p>
                            <p className='Product'>{product}</p>
                        </div>
                        <div className='stock'>
                            <p>Total Stock</p>
                            <p className='Stock'>{stock}</p>
                        </div>
                    </div>
                </div>
                <div className='invent2-box'>
                    <h4>Categories</h4>
                    <h5><span className='num'>24</span> <span className='span'>View all categories</span></h5>
                    <h5 className='sub'>Sub categories</h5>
                    <h5><span className='num'>64</span> <span className='span'>View all</span></h5>
                    <p><FaPlus/> Add category</p>
                </div>
                <div className='Alert'>
                    <img src={icon} className='icon' />
                    <p className='week'>This Week <FaChevronDown className='arrow'/></p>
                    <div className='invent-box3'>
                        <div className='lowStock'>
                            <p className='special'>Low Stock Alert</p>
                            <p className='num'>23</p>
                        </div>
                        <div className='expired'>
                            <p>Expired</p>
                            <p className='num'>3</p>
                        </div>
                        <div className='rating'>
                            <p>1 Start Rating</p>
                            <p className='num'>2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-detail'>
                <div className='product-nav'>
                    <h3>Inventory Items</h3>
                    <div className='item'>
                    <h4><FaSearch className='search'/> <input type='text'  placeholder='Search'/></h4>
                        <p><FaFilter className='icon'/> Filter</p>
                        <p><FaCalendarAlt className='icon'/> Filter</p>
                        <p><FaLocationArrow className='icon'/> Share</p>
                        <p className='bulk'>Bulk Action <FaChevronDown className='arrow'/></p>
                   </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InventoryNav