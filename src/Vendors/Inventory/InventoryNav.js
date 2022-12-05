import React from 'react'
import { FaChevronDown, FaBell, FaHome } from 'react-icons/fa'

const InventoryNav = () => {
  return (
    <div>
        <header>
            <h1>Inventory</h1>
            <div className='profile'>
                <p>TEE Gadgets <FaChevronDown className='arrow'/></p>
                <FaBell/>
            </div>
            <div className='head'>
                <FaHome/>
                <p>/</p>
                <p>Inventory</p>
            </div>
        </header>
    </div>
  )
}

export default InventoryNav