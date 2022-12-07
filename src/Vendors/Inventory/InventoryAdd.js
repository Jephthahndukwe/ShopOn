import React, { useState, useEffect } from 'react'
import '../Stylings/Inventory.css'
import { FaBell, FaHome, FaCloudUploadAlt, FaTrash, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../Inventory/img/Image.png'

const InventoryAdd = () => {
    const [productName, setProductName] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [sellingPrice, setSellingPrice] = useState("")
    const [costPrice, setCostPrice] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [orderType, setOrderType] = useState("")
    const [variationType, setVariationType] = useState("")


    const [selectedImages, setSelectedImages] = useState([]);
    const [additionalImages, setAdditionalImages] = useState([])

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        }
        );
        
        
        setSelectedImages(imagesArray);
    };

    const onSelectedFile = (event) => {
        const selectedFiles2 = event.target.files;
        const selectedFilesArray2 = Array.from(selectedFiles2);

        const imagesArray2 = selectedFilesArray2.map((file) => {
            return URL.createObjectURL(file);
        }
        );
        
        
        setAdditionalImages(imagesArray2);
    };

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
                        <label>
                            <FaCloudUploadAlt className='upload-icon'/>
                            <span>Upload Image</span>
                            <input type='file' name='images' onChange={onSelectFile} />
                        </label>
                        <p>Upload a cover image for your product.<br/> File Format jpeg, png Recommened Size 600x600 (1:1)</p>
                    </div>
                    <div className='imgUploaded'>
                        {selectedImages && 
                        selectedImages.map((image, index) => {
                            return (
                                <div key={image} className='image'>
                                    <img src={image} className='uploadedImg'/>
                                    <label className='label'>
                                        <div className='uploading'>
                                          <FaCloudUploadAlt className='Upload-icon2'/>
                                        </div>
                                      <input type='file' name='images' onChange={onSelectFile}/>
                                    </label>
                                    <div className='deleting'>
                                        <FaTrash className='delete-icon' onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='additional'>
                    <h3>Additional Images</h3>
                    <div className='all-added'>
                    <div className='addition-upload'>
                        <img src={img} className='add-img'/>
                        <label className='label'>
                            <div className='uploading2'>
                                <FaCloudUploadAlt className='Upload-icon3'/>
                                <span>Upload Image</span>
                            </div>
                            <input type='file' name='images' onChange={onSelectedFile} multiple accept="image/*"/>
                        </label>
                    </div>

                    <div className='imgUploaded'>
                        {additionalImages && 
                        additionalImages.map((image, index) => {
                            return (
                                <div key={image} className='image images2'>
                                    <img src={image} className='additionalImg'/>
                                    <label className='label'>
                                        <div className='uploading3'>
                                          <FaCloudUploadAlt className='Upload-icon4'/>
                                        </div>
                                      <input type='file' name='images' onChange={onSelectedFile} multiple accept="image/*"/>
                                    </label>
                                    <div className='deleting2'>
                                        <FaTrash className='delete-icon2' onClick={() => setAdditionalImages(additionalImages.filter((e) => e !== image))} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    </div>
                </div>
                </div>
               
                </div>
                <div className='add-box2'>
                    <div className='form'>
                        <input type='text' value={productName} placeholder='Product Name'/><br/>
                        <select className='select2'>
                            <option>Product Category</option>
                            <option>other</option>
                            <option>other</option>
                            <option>other</option>
                        </select>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default InventoryAdd