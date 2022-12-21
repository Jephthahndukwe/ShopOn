import React from 'react'
import './Logo.css'
import Rectangle159 from './Image/Rectangle 159.png'
import Rectangle163 from './Image/Rectangle 163.png'
import Rectangle160 from './Image/Rectangle 160.png'
import Rectangle162 from './Image/Rectangle 162.png'
import Rectangle166 from './Image/Rectangle 166.png'
import Rectangle165 from './Image/Rectangle 165.png'
import Rectangle164 from './Image/Rectangle 164.png'
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
