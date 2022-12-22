import React from 'react'
import chair from '../../Assets/Images/chair.svg'
import '../../Styles/User/Gdesign.css'

const GreatDesign = () => {
  return (
    <>
        <div className='container-sm mt-5 d-flex justify-content-between malmd'>
            <img src={chair} className="malchair"/>
            <div className='bg-dark text-white maloff'>
                <p className='malup'>up to</p>
                <div className='d-flex'>
                    <p className='mals60'>60</p>
                    <div className='malper'>
                        <p className='malcen'>%</p>
                        <p className='malof'>off</p>
                    </div>
                </div>
            </div>
            <div className='maltex'>
                <p className='malmrww'>MAKE REAL WITH WOOD</p>
                <p className='malgdap'>GREAT DESIGN AFFORDABLE PRICES</p>
            </div>
            <button className='malexp'>Explore Now</button>
        </div>
    </>
  )
}

export default GreatDesign