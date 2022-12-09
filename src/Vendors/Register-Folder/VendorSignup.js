import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img2 from '../Register-Folder/Ragister-Images/Group.png'
import Images from '../Register-Folder/Ragister-Images/Dashboard.png'
import { FaImage } from 'react-icons/fa'

const VendorSignup = () => {
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
    const onSelectedFiles = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        }
        );
        
        
        setAdditionalImages(imagesArray);
    };

  return (
    <div>
        <div className='signup signin'>
          <div className='two-images for-signup'>
            <img src={Img2} className='img2 img6'/>
            <img src={Images} className='img img8'/>
            </div>
                <div className='inner-container signin2'>
                <div className='main main2'>
                <form>
                <div className='color '>
                    <div className='twenty-fivepercent'></div>
                </div>
                
                <p className='zero zero2'>25%</p>
                <h2 className='vendor sign-up-as-vendor for-vendor-signup'>Sign up as vendor</h2>
                <div className='first-upload-upload2'>
                <div className='first-upload'>
                    <div className='vendor-change'>
                        <div className='signupImg'>
                        <FaImage className='signImg'/>
                        </div>
                        <label className='signLabel'>
                         <p className='vendor-picture'>Vendor picture</p>
                         <input type='file' name='image' onChange={onSelectFile}/>
                        </label>
                    <p className='picture-change'>You can change your picture later</p>
                    </div>
                    <div className='signUploaded'>
                        {selectedImages && 
                        selectedImages.map((image, index) => {
                            return (
                                <div key={image} className='image'>
                                    <img src={image} className='uploadedsignImg'/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='first-upload2'>
                    <div className='store-size'>
                     <div className='signupImg2'>   
                    <FaImage className='signImg'/>
                    </div>
                    <div className='banner'>
                        <label className='signLabel'>
                            <input type='file' name='image' onChange={onSelectedFiles}/>
                            <p className='store-banner'>Store banner</p>
                        </label>
                        <p className='banner-size'>Banner size is (625x300) pixels</p>
                        </div>
                        <div className='signUploaded2'>
                        {additionalImages && 
                        additionalImages.map((image, index) => {
                            return (
                                <div key={image} className='image'>
                                    <img src={image} className='uploadedsignImg2'/>
                                </div>
                            );
                        })}
                    </div>
                    </div>
                </div>
                </div>

                <button className='signin-button button2'><Link to='/Stateform'> Continue</Link></button>
                <div className='have-sign'>
                <p>Have an Account ?</p>
                <p className='orange-sign'><a href='SignIn.js'>Sign in</a> </p>
                </div>
                </form>
                </div>
                </div>
                </div>

    </div>
  )
}

export default VendorSignup