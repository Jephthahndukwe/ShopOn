import React from 'react'
import Images from '../../Assets/Images/Dashboard.png'
import Img2 from '../../Assets/Images/Group.png'
import Img3 from '../../Assets/Images/google.png'
import Img4 from '../../Assets/Images/Facebook.png'
import Img5 from '../../Assets/Images/apple .png'
import '../../Styles/Vendor/Register.css'
import { Link } from 'react-router-dom'

const SignIn  = () => {


  return (
    <>
         <div className='signup'>
          <div className='two-images'>
            <img src={Img2} className='img2 '/>
            <img src={Images} className='img'/>
            </div>
                <div className='inner-container'>
                <div className='main'>
                <form>
                <div className='no-account'>
                <p>No Account ?</p>
                <p className='sign'><Link to='/SignUp'>Sign Up</Link></p>
                </div>
                <h1 className='vendor'>Sign in as vendor</h1>
                <p className='enter'>Enter your username or email address</p>
                <input className='username' type='text' placeholder='Username or email address'></input>
                <p className='enter-pass'>Enter your Password</p>
                <input className='pass' type='password' placeholder='Username or email address'></input>
                <p className='forgot'>Forgot Password</p>
                <Link to='/SignUp'> <button className='signin-button'>Sign in</button></Link>
                <p className='or'>OR</p>
                <div className='image3'>
                 <img src={Img3} className='img3'/>
                 <p className='sign-in-with-google'>Sign in with Google</p>
                </div>
                <div className='image4'>
                <img src={Img4} className='img4'/>
                </div>
                <div className='image5'>
                <img src={Img5} className='img5'/>
                </div>
                </form>
                </div>
                </div>
        </div>
    </>
  )
}

export default SignIn