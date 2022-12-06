import React from 'react'
import '../Stylings/Inventory.css'
import { FaBell, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const InventoryAdd = () => {
  return (
    <div className='body'>
        <div className='header'>
            <nav>
                <h1>Inventory</h1>
                <select className='select'>
                    <option>TEE Gadgets</option>
                    <option>Others</option>
                    <option>Others</option>
                    <option>Others</option>
                    <option>Others</option>
                    <option>Others</option>
                </select>
                    <FaBell className='bells'/>
            </nav>
            <div className='head'>
                <Link to='/'><p><FaHome className='home'/></p></Link>
                <p>/</p>
                <p>Inventory</p>
            </div>
        </div>
    </div>
  )
}

export default InventoryAdd