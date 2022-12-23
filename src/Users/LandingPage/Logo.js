import React from 'react'
import '../../Styles/User/Logo.css'
import Rectangle159 from '../../Assets/Images/Rectangle 159.png'
import Rectangle163 from '../../Assets/Images/Rectangle 163.png'
import Rectangle160 from '../../Assets/Images/Rectangle 160.png'
import Rectangle162 from '../../Assets/Images/Rectangle 162.png'
import Rectangle166 from '../../Assets/Images/Rectangle 166.png'
import Rectangle165 from '../../Assets/Images/Rectangle 165.png'
import Rectangle164 from '../../Assets/Images/Rectangle 164.png'
import Footer from './Footer'


const Logo = () => {
  return (
    <>
    <div className='davidContainer6'>
        <div className='davidcard9'>
            <div>
            <img className='logoimage' src={Rectangle159} />
            </div>
            <div>
            <img className='logoimage' src={Rectangle163} />
            </div>
            <div>
            <img className='logoimage' src={Rectangle160} />
            </div>
            <div>
            <img className='logoimage' src={Rectangle162} />
            </div>
            <div>
            <img className='logoimage' src={Rectangle166} />
            </div>
            <div>
            <img className='logoimage' src={Rectangle165} />
            </div>
            <div>
            <img className='logoimage' src={Rectangle164} />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Logo
