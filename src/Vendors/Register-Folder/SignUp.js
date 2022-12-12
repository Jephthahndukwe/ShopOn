import React from 'react'
import Img2 from '../Register-Folder/Ragister-Images/Group.png'
import Images from '../Register-Folder/Ragister-Images/Dashboard.png'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <>
      <div className='signup signin'>
          <div className='two-images for-signup'>
            <img src={Img2} className='img2 img6'/>
            <img src={Images} className='img img8'/>
            </div>
                <div className='inner-container signin2'>
                <div className='main main2'>
                <form>
                <div className='color'>
                </div>
                
                <p className='zero zero2'>0%</p>
                <div className='onvendor'>
                <h2 className='vendor sign-up-as-vendor'>Sign up as vendor</h2>
                <div className='for-email-placeholder'>
                <p>Email Address</p>
                <input className='username email-address' type='text' placeholder='Email address'></input><br></br>
                </div>
                <p className='doyouwant'><input type='checkbox'/>  Do you want to display email address on product and </p>
                <p className='storepage'>store page</p>
                {/* <input type='checkbox'> </input> */}
                <div className='https-group'>
                <p className='enter'>Store name</p>
                <input className='pass fortee' type='password' placeholder='Tee Gadjets'></input>
                <p className='href'><a href=''>https//soairshopon.com/Tee.gadjets</a><span className='searching'>searching</span></p>
                </div>
                <p className='enter yourpassword'>Enter your password</p>
                <input className='username email-address' type='text' placeholder='Password'></input><br></br>
                <Link to='/VendorSignup'><button className='signin-button button2'>Continue</button></Link>
                <div className='have-sign'>
                <p>Have an Account ?</p>
                <p className='orange-sign'><Link to='/SignIn'>Sign in</Link> </p>
                </div>
                </div>
                </form>
                </div>
                </div>
                </div>

    </>
  )
}

export default SignUp