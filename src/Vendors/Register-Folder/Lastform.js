import React from 'react'
import Img2 from '../../Assets/Images/Group.png'
import Images from '../../Assets/Images/Dashboard.png'
const Lastform = () => {
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
                <div className='color color-last'>
                    <div className='fifty-percent seventy-five hundred '></div>
                </div>
                <p className='zero zero2 zero3 last-zero'>100%</p>
                <p className='you-are-now'>Great you are now a new owner on soair shopon. Add products right </p>
                <p className='to-sell-like'>to sell like crazy</p>
                <button className='signin-button button2 button3'>Go to my dashboard</button>
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

export default Lastform