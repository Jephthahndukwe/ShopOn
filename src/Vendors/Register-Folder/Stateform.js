import React from 'react'
import Img2 from '../Register-Folder/Ragister-Images/Group.png'
import Images from '../Register-Folder/Ragister-Images/Dashboard.png'

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
                <p>Country</p>
                <imput className='' type ></imput>
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

export default Stateform