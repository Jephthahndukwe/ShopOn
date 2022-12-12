import React from 'react'
import chair from "../Assets/Images/chair.svg"
import "../Users/Styles/Gdesign.css"

const GreatDesign = () => {
  return (
    <>
        <div className='container-sm mt-5 d-flex justify-content-between md'>
            <img src={chair} className="chair"/>
            <div className='bg-dark text-white off'>
                <p className='up'>up to</p>
                <div className='d-flex'>
                    <p className='s60'>60</p>
                    <div className='per'>
                        <p className='cen'>%</p>
                        <p className='of'>off</p>
                    </div>
                </div>
            </div>
            <div className='tex'>
                <p className='mrww'>MAKE REAL WITH WOOD</p>
                <p className='gdap'>GREAT DESIGN AFFORDABLE PRICES</p>
            </div>
            <button className='exp'>Explore Now</button>
        </div>
    </>
  )
}

export default GreatDesign