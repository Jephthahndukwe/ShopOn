import React from 'react'
import '../../Styles/User/Furniture.css'
import Rectangle280 from '../../Assets/Images/Rectangle 280.png'
import Rectangle281 from '../../Assets/Images/Rectangle 281.png'
import Rectangle282 from '../../Assets/Images/Rectangle 282.png'
import Rectangle283 from '../../Assets/Images/Rectangle 283.png'
import Rectangle284 from '../../Assets/Images/Rectangle 284.png'
import Logo from '../LandingPage/Logo'

const Furniture = () => {
  return (
    <>
    <div className='followus'>
        <a href='' className='follow'>Follow us on instagram</a>
    </div>

    <div className='davidContainer5'>
        <div className='davidcard8'>
            <div>
            <img className='furnitureimage' src={Rectangle280} />
            </div>
            <div>
            <img className='furnitureimage' src={Rectangle281} />
            </div>
            <div>
            <img className='furnitureimage' src={Rectangle282} />
            </div>
            <div>
            <img className='furnitureimage' src={Rectangle283} />
            </div>
            <div>
            <img className='furnitureimage' src={Rectangle284} />
            </div>
        </div>
    </div>
    <Logo/>
    </>
  )
}

export default Furniture
