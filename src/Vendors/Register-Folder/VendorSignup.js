import React from 'react'
import Img2 from '../Register-Folder/Ragister-Images/Group.png'
import Images from '../Register-Folder/Ragister-Images/Dashboard.png'
const VendorSignup = () => {
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
                    <p className='vendor-picture'>Vendor picture</p>
                    <p className='picture-change'>You can change your picture later</p>
                    </div>
                </div>
                <div className='first-upload2'>
                    <div className='store-size'>
                        <p className='store-banner'>Store banner</p>
                        <p className='banner-size'>Banner size is (625x300) pixels</p>
                    </div>
                </div>
                </div>

                <button className='signin-button button2'>Continue</button>
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