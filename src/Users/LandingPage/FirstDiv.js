import React from 'react'
import '../../Styles/User/Dami.css'
import { FaPlane } from 'react-icons/fa'
import { AiFillDollarCircle } from 'react-icons/ai'
import { FaTag } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
const FirstDiv = () => {
  return (
    <>
        <div className='first-div'>
            <div className='container'>
                <div className='row'> 
                    <div className='col-md-9'>
                        <ul className='dami-list'>
                            <li> <FaPlane/> Free delivery over $200</li>
                            <li> <AiFillDollarCircle/> Money back guarantee</li>
                            <li> <FaTag/> Weekly new arrivals</li>
                        </ul>
                    </div>
                    <div className='col-md-3 mr-auto'>
                        <ul className='ms-auto dami-list'>
                            <li>ENG <FaChevronDown/> </li>
                            <li>USD <FaChevronDown/> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FirstDiv