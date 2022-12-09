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
    const [quantity, setQuantity] = useState("")
    const [orderType, setOrderType] = useState("")
    const [variationType, setVariationType] = useState("")
    const [expire, setExpire] = useState("")
    const [message, setMessage] = useState("")
    const [longMessage, setLongMessage] = useState("")
    const [specification, setSpecification] = useState("")
    const [discount, setDiscount] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")


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
        });

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
                        <input type='text' value={productName} placeholder='Product Name' onChange={(e) => setProductName(e.target.value)}  className='input'/>
                        <label>
                        <select className='select2' value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                            <option>Search Product Category</option>
                            <option>other</option>
                            <option>other</option>
                            <option>other</option>
                        </select>
                        <FaPlus className='Fplus'/>
                        </label>
                        <label>
                        <select className='select3' value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                            <option>Search product sub category</option>
                            <option>other</option>
                            <option>other</option>
                            <option>other</option>
                        </select>
                        <FaPlus className='Fplus'/>
                        </label>
                        <div className='inputs'>
                            <input type='text' value={sellingPrice} placeholder='Selling Price' onChange={(e) => setSellingPrice(e.target.value)} className='input'/>
                            <input type='text' value={costPrice} placeholder='Cost Price' onChange={(e) => setCostPrice(e.target.value)} className='input'/>
                        </div>
                        <input type='number' value={quantity} placeholder='Quantity in Stock' className='quantity input' onChange={(e) => setQuantity(e.target.value)} />
                        <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
                            <option>Order Type</option>
                            <option>other</option>
                            <option>other</option>
                            <option>other</option>
                        </select>
                        <select value={variationType} onChange={(e) => setVariationType(e.target.value)}>
                            <option>variation Type</option>
                            <option>other</option>
                            <option>other</option>
                            <option>other</option>
                        </select>
                        <div className='expire'>
                            <p>Expire Date</p>
                            <p className='date'>Add Expiry Date</p>
                        </div>

                        <div className='form-2'>
                            <textarea value={message} placeholder='Short Description' className='message'/>
                            <label>
                                <p>Product Long Description</p>
                                <textarea value={longMessage} placeholder='your text get here'/>
                            </label>
                            <label>
                                <p>Add a long description for your product</p>
                                <textarea value={specification} placeholder='Specifications'/>
                            </label>
                            <div className='discount' value={discount}>
                                <p>Discount</p>
                                <p className='add'>Add Discount</p>
                                <h4>Input value %{discount}</h4>
                            </div>
                            <div className='time'>
                                <p>Discount until</p>
                                <input type='date' value='2022-12-12'/>
                                <input type='time' value='12:00' className='timer' />
                            </div>
                            <div className='schedule'>
                                <p>Schedule publish</p>
                                <input type='date' value='2022-12-12'/>
                                <input type='time' value='12:00' className='timer' />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default InventoryAdd