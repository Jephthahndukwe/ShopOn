import React from 'react'
import '../Stylings/Inventory.css'
import { FaBell, FaHome, FaCloudUploadAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../Inventory/img/Image.png'

const InventoryAdd = () => {
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        console.log(selectedFiles);
    } 

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
        <div className='newInventory'>
            <div className='newInvent'>
            <h3>New Inventory Item</h3>
            <div className='new'>
                <select>
                    <option>Save as Draft</option>
                    <option>other</option>
                    <option>other</option>
                    <option>other</option>
                </select>
               <a href=''>Save & Publish</a>
               </div>
            </div>

            <div className='addInventory'>
                <div className='add-box1'>
                    <div className='imgInventory'>
                        <img src={img} className='img-icon'/>
                        <label className='label'>
                            <FaCloudUploadAlt className='upload-icon'/>
                            <span>Upload Image</span>
                            <input type='file' name='images' onChange={onSelectFile} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InventoryAdd