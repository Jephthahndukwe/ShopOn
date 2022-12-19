import React from 'react'
import hchair from "../LandingPage/Images/hchair.png"
import cchair from "../LandingPage/Images/cchair.png"
import orange from "../LandingPage/Images/orangediv.png"
import "../LandingPage/Styling/HolidaySale.css"

const HolidaySale = () => {
  return (
    <>
        <div className='container malone p-3 d-flex'>
          <img className='' src={hchair}/>
          <div className='maltwoo text-center'>
            <div className='d-flex justify-content-center'>
              <div>
                <p className='malpto'>up to</p>
                <p className='malpp'>-</p>
              </div>
              <div>
                <p className='malf50'>50</p>
              </div>
              <div>
                <p className='malpcg'>%</p>
                <p className='malffo'>off</p>
              </div>
            </div>
            <p className='malholi'>Holiday <i className='malsal'>Sale</i></p>
            <p className='text-muted malidad'>interior design and decor for your home</p>
            <div className='malfhd'>
              <img src={orange} className=''/>
              <p className='malfhdd'>free home delivery</p>
            </div>
            <p className='malszc'>SELECT ZWILLING CUTLERY</p>
            <button className='malbuen'>Explore Now</button>
          </div>
          <img src={cchair}/>
        </div>
    </>
  )
}

export default HolidaySale