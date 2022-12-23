import React from 'react'
import '../../Styles/User/Footer.css'
import SHOPON from '../../Assets/Images/SHOPON.png'
import Rectangle49 from '../../Assets/Images/Rectangle 49.png'
import facebooklogo from '../../Assets/Images/facebooklogo.png'
import Google from '../../Assets/Images/Googles.png'
import cameralogo from '../../Assets/Images/cameralogo.png'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div>
        <img className="shoponimage" src={SHOPON} />
      </div>
      <div className='lorem'>
        Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut erroribus, ad nonumy vituperata mei.
        Et qui falli latine consequutur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis
        posidonium has. Eum ei verear dolorum. Duo quas viris delenit cu, dolores inciderint scribentur mel in.
      </div>
      <div className='wrapper'>
        <div className='Rectangle49'>
          <img src={Rectangle49} />
        </div>
        <div className='facebook'>
          <img src={facebooklogo} />
        </div>
        <div className='Rectangle49'>
          <img src={Rectangle49} />
        </div>
        <div className='Google'>
          <img src={Google} />
        </div>
        <div className='Rectangle49'>
          <img src={Rectangle49} />
        </div>
        <div className='camera'>
          <img className='cameralogo' src={cameralogo} />
        </div>
      </div>
      <div className='line'></div>
      <div className='davidnavbar'>
        <ul className='davidnavs'>
          <li><a href=''>About Us</a></li>
          <li><a href=''>Contact Us</a></li>
          <li><a href=''>My Account</a></li>
          <li><a href=''>Store Location</a></li>
          <li><a href=''>Search Terms</a></li>
        </ul>
      </div>

      <div className='davidnavbar'>
        <ul className='davidnavs'>
          <li><a href=''>Help & FAQs</a></li>
          <li><a href=''>Gift Cards</a></li>
          <li><a href=''>Shipping & Delivery</a></li>
          <li><a href=''>Refund Policy</a></li>
        </ul>
      </div>

      <div className='rights'>&copy; All rights Reserved</div>
    </div>
  )
}

export default Footer

