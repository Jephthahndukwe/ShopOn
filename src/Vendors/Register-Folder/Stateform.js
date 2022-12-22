import React from 'react'
import Img2 from '../../Assets/Images/Group.png'
import Images from '../../Assets/Images/Dashboard.png'
import { Link } from 'react-router-dom'

const Stateform = () => {
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
                    <div className='fifty-percent'></div>
                </div>
                <p className='zero zero2'>50%</p>
                <p className='country'>Country</p>
                <input className='select-country' placeholder='Select country'></input><br/>
                <p className='state'>State</p>
                <input className='Select-state' placeholder='Select state'></input><br/>
                <p className='Whatsapp'>Whatsapp phone number</p>
                <input className='Whatsapp-phone-number' placeholder='+2349164419035'></input><br/>
                <p className='Do-you-to-display'> <input type='checkbox'></input>
                Do you want to display whatsapp on product and <br/>store page</p>
                <button className='signin-button button2'><Link to='/Lastform'> Continue</Link></button>
                <div className='have-sign'>
                <p>Have an Account ?</p>
                <p className='orange-sign'><a href='SignIn'>Sign in</a></p>
                </div>
                </form>
                </div>
                </div>
                </div>

    </div>
  )
}

export default Stateform