import React from 'react'
import Img2 from '../Register-Folder/Ragister-Images/Group.png'
import Images from '../Register-Folder/Ragister-Images/Dashboard.png'
import { Link } from 'react-router-dom'
const Bankform = () => {
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
                    <div className='fifty-percent seventy-five '></div>
                </div>
                <p className='zero zero2 zero3'>75%</p>
                <p className='country bank'>Select bank</p>
                <input className='select-country select-bank' ></input><br/>
                <p className='state account'>Account name</p>
                <input className='Select-state account-name' placeholder='Nwosu Bishop Kizito'></input><br/>
                <p className='working-day'>payments are made by the 8th working day after the one week date range 
                <br/> of sales</p>
                <p className='Whatsapp acc-number'>Account number</p>
                <input className='Whatsapp-phone-number account-number' placeholder='2117260397'></input><br/>
                <Link to='/Lastform'><button className='signin-button button2 button4'>Setup store
                </button></Link>
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

export default Bankform